import styled from 'styled-components';
import { colors } from '@luma-fe-workspace/design-system';

export const WidgetContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${colors.white};
`;

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem;
  height: 2.5rem;
  border-bottom: 1px solid ${colors.greyLightest};
`;

export const Title = styled.h2`
  margin-right: 2.5rem;
  font-family: IBM Plex Sans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3125rem;
  letter-spacing: 0.01875rem;
`;

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2.5rem;
`;

export const ExpansionButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
`;

export const ActionBar = styled.div`
  width: 100%;
  height: 1.75rem;
  margin-top: 0.75rem;
  display: flex;
  padding: 0 0.5rem;
`;

export const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 0.5rem;
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
`;
