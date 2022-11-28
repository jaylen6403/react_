import {
  LumaButton,
  LumaColor,
  LumaFont,
} from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 1.5rem;
  font-family: ${LumaFont.DEFAULT};
`;

export const Separator = styled.div`
  margin: 0 -1.5rem;
  height: 0.0625rem;
  background-color: ${LumaColor.NEUTRAL_40};
`;

export const RequestNewProductContainer = styled.div`
  margin-bottom: -1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 6.5rem;

  a {
    text-decoration: none;
  }
`;

export const RequestNewProductButton = styled(LumaButton)`
  white-space: nowrap;
  width: 12.5rem;
  height: 2.5rem;
`;
