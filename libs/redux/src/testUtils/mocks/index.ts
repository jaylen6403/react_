import * as authServiceData from './authService/data';
import * as authServiceHandlers from './authService/handlers';
import * as permissionsServiceData from './permissionsService/data';
import * as permissionsServiceHandlers from './permissionsService/handlers';
import * as secondariesServiceData from './secondariesService/data';
import * as secondariesServiceHandlers from './secondariesService/handlers';

export const mockData = {
  ...authServiceData,
  ...permissionsServiceData,
  ...secondariesServiceData,
};

export const mockHandlers = {
  ...authServiceHandlers,
  ...permissionsServiceHandlers,
  ...secondariesServiceHandlers,
};
