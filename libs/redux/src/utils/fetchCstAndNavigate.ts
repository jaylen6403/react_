import store from '../redux/configureStore';
import { authApi } from '../redux/authService/slice';

type CreateLinkFn = (cst: string) => string;

export const fetchCstAndNavigate = (createLinkFn: CreateLinkFn) => {
  store.dispatch(authApi.endpoints.crossSiteCst.initiate()).then((response) => {
    const { data: cst } = response;
    // If CST returned navigate to URL
    if (cst) {
      window.location.href = createLinkFn(cst);
    } else {
      console.error(
        `Error: CST not retrieved for request to ${createLinkFn(
          '_missing_cst_'
        )} `,
        response
      );
    }
  });
};
