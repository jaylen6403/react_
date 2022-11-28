import styled from 'styled-components';
import { colors } from '@luma-fe-workspace/design-system';

export const Container = styled.div`
  background-color: ${colors.neutral10};
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.6875rem;
  line-height: 1rem;
  margin-top: 6.25rem;
  padding: 0.9375rem;
  width: 100%;
`;

export const Disclaimer = styled.div`
  color: #d0021b;
  font-size: 0.5625rem;
  height: 2.25rem;
`;

export const SectionHeader = styled.div`
  color: #888;
  font-weight: bold;
`;

export const SectionParagraph = styled.p`
  color: gray;
`;
