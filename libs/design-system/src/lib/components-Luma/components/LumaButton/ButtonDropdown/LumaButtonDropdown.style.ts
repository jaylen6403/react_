import styled from 'styled-components';
import { LumaButtonProps } from '../LumaButton';

export const Root = styled.div<Pick<LumaButtonProps, 'fullWidth'>>`
  position: relative;
  width: 100%;
`;
