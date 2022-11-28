import { LumaColor } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

const StyledSeparator = styled.div`
  border: 1px solid ${LumaColor.NEUTRAL_50};
  margin: 0.625rem 0;
`;

export function Separator() {
  return <StyledSeparator />;
}
