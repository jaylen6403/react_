import { apiUrl, URL_PATHS } from '@luma-fe-workspace/utility';
import { Stomp } from '@stomp/stompjs';
import {
  SecondaryRequestForQuote,
  SecondaryOrder,
} from '@luma-fe-workspace/redux';

export interface SecondaryWebsocketProps {
  token: string;
  currentPath: string;
}

const baseWebsocketURL = apiUrl?.split('https://')[1];

const WEBSOCKET_HELPERS = {
  SECONDARIES_URL: `wss://${baseWebsocketURL}/secondary-market-service/stream/websocket`,
  RFQS: 'rfqs',
  ORDERS: 'orders',
};

export const getWebsocketData = (
  props: SecondaryWebsocketProps,
  setWebsocketData: [
    (data: SecondaryRequestForQuote[]) => void,
    (data: SecondaryOrder) => void
  ]
) => {
  if (props.token) {
    const client = Stomp.client(WEBSOCKET_HELPERS.SECONDARIES_URL);
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
        const destinationRFQs = `/user/${sessionId}/stream/${WEBSOCKET_HELPERS.RFQS}`;
        const destinationOrders = `/user/${sessionId}/stream/${WEBSOCKET_HELPERS.ORDERS}`;

        const headers = { sessionId };
        if (sessionId) {
          connected = true;
        }

        client.subscribe(
          destinationRFQs,
          (message) => {
            if (message.body) {
              setWebsocketData[0](JSON.parse(message.body));
            }
          },
          headers
        );

        client.subscribe(
          destinationOrders,
          (message) => {
            if (message.body) {
              setWebsocketData[1](JSON.parse(message.body));
            }
          },
          headers
        );
      },
      (cb: { target: { readyState: number } }) => {
        connected = cb.target.readyState === 3 ? false : true;
      }
    );
    // autoreconnect once detected connection drop
    client.reconnectDelay = 3000; //reconnect every 5000ms

    //setTimeout is use to turn off auto reconnection if issue persist 11 seconds after - 11000ms is chosen to at least have autoreconnect to try 3 times
    setTimeout(() => {
      //by this time if connected is still false then auto reconnect did not work
      if (!connected) {
        client.deactivate();
        client.forceDisconnect();
      }
    }, 11000);

    //disconnect - if you are not on any secondaries path
    !props.currentPath.includes(URL_PATHS.SECONDARIES) && client.disconnect();
  } else {
    //if you were connected already and you signout - you need to disconnect
    Stomp.client(WEBSOCKET_HELPERS.SECONDARIES_URL).disconnect();
  }
};
