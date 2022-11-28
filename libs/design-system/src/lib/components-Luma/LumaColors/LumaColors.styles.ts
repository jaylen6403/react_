import styled from 'styled-components';
import { LumaColor } from './Lumacolors';

export const Value = styled.div`
  color: ${LumaColor.COLOR_SYSTEM_COLOR};
  font-size: 0.8125rem;
`;

export const Name = styled.div`
  color: ${LumaColor.COLOR_SYSTEM_FONT};
  font-size: 0.9375rem;
  margin-bottom: 0.375rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Details = styled.div`
  width: 9.375rem;
`;

export const Patch = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 4px;
  border: 0.125rem solid ${LumaColor.COLOR_SYSTEM_BORDER};
  flex-shrink: 0;
  height: 3rem;
  margin-right: 0.75rem;
  width: 3rem;
`;

export const ColorRoot = styled.div`
  display: flex;
  margin: 0.375rem;
  padding: 0.75rem;
`;

export const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
