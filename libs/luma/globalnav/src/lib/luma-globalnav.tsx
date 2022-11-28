import { useNavigate } from 'react-router-dom';

import {
  useAppDispatch,
  useAppSelector,
  logout,
  logoutOnAllTabs,
  selectAuth,
  lumaPermissionsArray,
  useUiPermissionsQuery,
  useGetUserTrainingStatusUsingGetQuery,
  useGetWhitelabelInfoUsingGetQuery,
  WidgetPermissions,
  fetchCstAndNavigate,
} from '@luma-fe-workspace/redux';
import { getLumaAppLogin, isLocal, isProd } from '@luma-fe-workspace/utility';
import {
  buildNavTabs,
  FrontEndLibraries,
  GlobalNav,
  NavTabType,
  ProductTypesType,
} from '@luma-fe-workspace/design-system';
import { Dispatch, SetStateAction } from 'react';

type LumaGlobalNavProps = {
  setShowTrainingModal: Dispatch<SetStateAction<boolean>>;
};

export const LumaGlobalNav = ({ setShowTrainingModal }: LumaGlobalNavProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data: userPermissionsData, isLoading: isLoadingUserPermissions } =
    useUiPermissionsQuery({
      permissions: lumaPermissionsArray,
    });

  const userPermissions: WidgetPermissions[] = userPermissionsData || [];

  const { data: userTrainingData, isLoading: isLoadingTrainingStatus } =
    useGetUserTrainingStatusUsingGetQuery();

  const userTrainingDataProductTypes: ProductTypesType =
    userTrainingData?.productTypes || [];

  const userInfo = useAppSelector(selectAuth);
  const tabs = buildNavTabs(
    userPermissions,
    userTrainingDataProductTypes,
    FrontEndLibraries.REACT,
    isProd,
    userInfo.company,
    userInfo.permissions
  );
  const { data: whiteLabelInfo } = useGetWhitelabelInfoUsingGetQuery();

  const accountAriaLabel = 'profile button';
  const menuAriaLabel = 'mobile menu';

  const handleNavigate = (tab: NavTabType): boolean | void => {
    const { route, url } = tab;
    if (tab.title === 'Structured Products') {
      if (userTrainingData?.cdTraining !== 'Completed') {
        setShowTrainingModal(true);
        return true;
      }
    }
    if (url) {
      if (
        url.includes('portal.lumafintech.com') ||
        url.includes('portal.naviancapital.com')
      ) {
        fetchCstAndNavigate((cstToken: string) => `${url}cst=${cstToken}`);
      } else {
        window.location.href = url;
      }
    } else if (route) {
      navigate(route);
      return;
    }
  };

  const userName = userInfo.fullName ? userInfo.fullName : '';

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      logoutOnAllTabs();
      if (isLocal) {
        navigate('/');
      } else {
        window.location.href = getLumaAppLogin();
      }
    });
  };
  if (isLoadingUserPermissions || isLoadingTrainingStatus) {
    return <p>...isLoading</p>;
  }

  return (
    <GlobalNav
      tabs={tabs}
      accountAriaLabel={accountAriaLabel}
      menuAriaLabel={menuAriaLabel}
      handleNavigate={handleNavigate}
      userName={userName}
      logout={handleLogout}
      issuerLogo={whiteLabelInfo ? whiteLabelInfo.companyUri : ''}
    />
  );
};
