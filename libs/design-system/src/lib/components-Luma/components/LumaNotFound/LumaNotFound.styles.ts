import styled from 'styled-components';
import { LumaIcon } from '../LumaIcon';
import { LumaColor } from '../../LumaColors';

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const IconWrapper = styled(LumaIcon)`
  margin-bottom: 2rem;
`;

export const NotFoundText = styled.span`
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const LinkText = styled.span`
  color: ${LumaColor.PRIMARY_50};
  font-weight: 600;
`;

export const IconStyles = { fontSize: '4.25rem', color: LumaColor.PRIMARY_50 };
