import { LumaButton } from '@luma-fe-workspace/design-system';
import {
  selectPermissions,
  selectTradeDeskType,
  useAppSelector,
} from '@luma-fe-workspace/redux';
import { Link } from 'react-router-dom';
import { HomePageWrapper } from './HomePage.styles';
import {
  canCreatePricing,
  CreationHubPages,
  Permissions,
  UserTypes,
} from './HomePageUtils';
import { Pricings } from '../Pricings';
import { Rfqs } from '../Rfqs';

export function HomePage() {
  const permissions = useAppSelector(selectPermissions) as Permissions[];
  const userType = useAppSelector(selectTradeDeskType) as UserTypes;

  return (
    <HomePageWrapper>
      {canCreatePricing(permissions) && (
        <Link to={CreationHubPages.NewPricing}>
          <LumaButton variant="secondary" size="large">
            New Pricing
          </LumaButton>
        </Link>
      )}
      {userType === UserTypes.Client ? (
        <Pricings />
      ) : userType === UserTypes.Issuer ? (
        <Rfqs />
      ) : null}
    </HomePageWrapper>
  );
}

//faslkjflkaslfkas