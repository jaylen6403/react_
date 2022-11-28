import { baseApi } from './websocketServiceBaseApi';
import { URL_PATHS } from '@luma-fe-workspace/utility';
import { Stomp } from '@stomp/stompjs';

export interface WebsocketProps {
  baseClientURL: string;
  token: string;
  destination: string;
  currentPath: string;
}

const injectedWebsocketApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query<any, WebsocketProps>({
      queryFn: () => ({ data: [] }), //we do not care about the initial query so we do not need basequery
      async onCacheEntryAdded(props, { cacheEntryRemoved, updateCachedData }) {
        //we ensure user is authenticated before hitting the server as the JWT is required
        if (props.token) {
          const client = Stomp.client(props.baseClientURL); //Instantiate
          let connected = false;
          //setting up header for authentication
          const header = {
            Authorization: `Bearer ${props.token}`,
          };
          client.connect(
            header,
            (data: any) => {
              //subscription to a channel that is session based
              const sessionId = data.headers['user-name'];
              const destination = `/user/${sessionId}/stream/${props.destination}`;
              const headers = { sessionId };
              if (sessionId) {
                connected = true;
              }

              client.subscribe(
                destination,
                (message) => {
                  if (message.body) {
                    // populate the array with messages as they are received from the websocket
                    updateCachedData((draft) => {
                      draft.push(JSON.parse(message.body));
                    });
                  }
                },
                headers
              );
            },
            (error: any) => console.log('=====SERVER HAS ERROR', { error }),
            (cb: { target: { readyState: number } }) => {
              connected = cb.target.readyState === 3 ? false : true;
              console.log('===============CONNECTION CLOSED - EVENT', cb);
            }
          );

          // autoreconnect once detected connection drop
          client.reconnectDelay = 3000; //reconnect every 5000ms

          //setTimeout is use to turn off auto reconnection if issue persist 11 seconds after - 11000ms is chosen to at least have autoreconnect to try 3 times
          setTimeout(() => {
            //by this time if connected is still false then auto reconnect did not work
            if (!connected) {
              console.log(
                '====NOT CONNECTED AND AUTO RECONNECT FAILED===DEACTIVATING.......',
                { connected }
              );
              client.deactivate();
              client.forceDisconnect();
            }
          }, 11000);

          //disconnect - if you are not on any secondaries path
          !props.currentPath.includes(URL_PATHS.SECONDARIES) &&
            client.disconnect(() =>
              console.log('CLIENT HAS BEEN DISCONNECTED!!')
            );

          await cacheEntryRemoved;
        } else {
          //if you were connected already and you signout - you need to disconnect
          Stomp.client(props.baseClientURL).disconnect(() =>
            console.log('CLIENT HAS BEEN DISCONNECTED!!')
          );
        }
      },
    }),
  }),
});
export { injectedWebsocketApi as websocketServiceApi };
export const { useGetMessagesQuery } = injectedWebsocketApi;
