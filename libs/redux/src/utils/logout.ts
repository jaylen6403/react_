import { getLumaAppLogin, isLocal } from '@luma-fe-workspace/utility';

const LOGOUT_TRIGGERED = 'logout_triggered';
const YES = 'yes';
const NO = 'no';

export const syncLogout = (event: StorageEvent): void => {
  const logoutPath = isLocal ? `${window.location.origin}/` : getLumaAppLogin();
  if (event.key === LOGOUT_TRIGGERED && event.newValue === YES) {
    if (window.location !== window.parent.location) {
      // If an iframe: reload parent
      window.parent.location.href = logoutPath;
    } else {
      window.location.href = logoutPath;
    }
  }
};

export const logoutOnAllTabs = () => {
  localStorage.setItem(LOGOUT_TRIGGERED, YES); // logout across tabs
  localStorage.setItem(LOGOUT_TRIGGERED, NO);
};
