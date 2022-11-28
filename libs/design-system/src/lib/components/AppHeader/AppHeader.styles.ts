import styled from 'styled-components';
import { colors } from '../../colors';

const ALIGNMENT_MAP = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
} as const;

export const Heading = styled.h1`
  color: ${colors.blueMedium};
  display: inline-block;
  font-family: Lato, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
  margin: 0;
  width: 33.33%;
`;

export const Content = styled.div<{ alignment: 'left' | 'center' | 'right' }>`
  display: inline-flex;
  justify-content: ${(props) => ALIGNMENT_MAP[props.alignment]};
  width: 33.33%;
`;

export const Root = styled.header`
  align-items: center;
  background-color: ${colors.white};
  display: flex;
  max-height: 5.5rem;
  padding: 1.5rem;
`;
