import { LumaColor, Icon, breakpoints } from '@luma-fe-workspace/design-system';
import styled, { css, keyframes } from 'styled-components';
import { StatusOptions } from '../../utils/hooks/useEventConfirmationOptions';

const slideInUp = keyframes`
   0% {
     transform: translate3d(0, 130%, 0);
   }
   to {
     transform: translate3d(0, 0, 0);
   }
 `;

const slideOutDown = keyframes` 
   0% {
     transform: translateZ(0);
     -webkit-transform: translateZ(0);
   }
   to {
     transform: translate3d(0, 130%, 0);
     -webkit-transform: translate3d(0, 130%, 0);
   }
 `;

export const ConfirmationWrapper = styled.div<{
  status: StatusOptions;
  onOpen: boolean;
}>`
  width: 56.25rem;
  height: 6.5rem;
  padding: 1.5rem 0;
  background-color: ${(props) =>
    props.status === StatusOptions.Success
      ? LumaColor.POSITIVE_10
      : LumaColor.NEGATIVE_10};
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  margin-left: -28.125rem;
  border: 1px solid
    ${(props) =>
      props.status === StatusOptions.Success
        ? LumaColor.POSITIVE_40
        : LumaColor.NEGATIVE_40};
  border-radius: 0.5rem;
  color: ${LumaColor.NEUTRAL_80};
  display: ${(props) =>
    props.status === StatusOptions.None ? 'none' : 'flex'};
  align-items: center;

  animation: ${(props) =>
    props.onOpen
      ? css`
          ${slideInUp} 0.5s cubic-bezier(0.76, 0.08, 0.71, 0.95);
          animation-fill-mode: both;
        `
      : css`
          ${slideOutDown} 0.25s cubic-bezier(0.76, 0.08, 0.71, 0.95);
          animation-fill-mode: both;
        `};
`;

export const CloseIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  margin: 0 1.5rem;
  z-index: 1;
  @media ${breakpoints.tablet} {
    margin-top: 3.875rem;
  }
  :hover {
    cursor: pointer;
  }
`;

export const CloseIcon = styled(Icon)`
  height: 1.875rem;
  color: ${LumaColor.NEUTRAL_80};
`;

export const ConfirmationText = styled.div``;

export const StatusText = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const ProductType = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
`;

export const StatusIconWrapper = styled.div`
  margin: 0 1.5rem;
  font-size: 2rem;
`;

export const StatusIcon = styled(Icon)``;
