import { Link } from 'react-router-dom';
import {
  CenteredContainer,
  IconWrapper,
  IconStyles,
  NotFoundText,
  LinkText,
} from './LumaNotFound.styles';

export interface LumaNotFoundProps {
  returnUrl?: string;
}

const defaultProps = {
  returnUrl: 'dashboard',
};

export function LumaNotFound(props: LumaNotFoundProps) {
  props = { ...defaultProps, ...props };
  return (
    <CenteredContainer>
      <IconWrapper
        iconCode="exclamation-circle"
        type="solid"
        style={IconStyles}
      />
      <NotFoundText>Page not found</NotFoundText>
      <div>
        Return to your{' '}
        <Link to={props.returnUrl as string}>
          <LinkText>Dashboard</LinkText>
        </Link>
      </div>
    </CenteredContainer>
  );
}
