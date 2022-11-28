import styled from 'styled-components';
import { colors, spacing } from '@luma-fe-workspace/design-system';

export const CardContainer = styled.div`
  width: 100%;
  height: 4.69rem;
  display: flex;
  flex-direction: column;
  padding: ${spacing.xs} ${spacing.m};
  border-top: solid 0.063rem ${colors.neutral40};
  font-family: 'IBM Plex Sans', sans-serif;
`;

export const Title = styled.div`
  font-size: 0.75rem;
  width: 100%;
  height: 1.13rem;
  color: ${colors.neutral60};
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: bold;
`;

export const Content = styled.div`
  margin-top: 0.0625rem;
  width: 100%;
  height: 1.25rem;
  font-size: 1rem;
  color: ${colors.neutral80};
  display: flex;
  align-items: center;
  flex-direction: row;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: bold;
  margin: 0 0.25rem 0 0;
`;

export const Currency = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.688rem;
  font-weight: normal;
  color: ${colors.neutral80};
  border-radius: 0.5rem;
  border: solid 0.063rem ${colors.neutral40};
  margin: 0.063rem 0 0.063rem 0.25rem;
  height: 1.125rem;
  padding: 0rem 0.125rem;
`;
