import styled from 'styled-components';
import { breakpoints, LumaColor } from '@luma-fe-workspace/design-system';

export const GroupLabel = styled.span`
  font-size: 0.875rem;
  width: 100%;
  margin: 0.375rem 0;
`;

export const FormGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FieldWrapper = styled.span`
  display: inline-flex;
  margin: 0.625rem 0.625rem 0.625rem 0;
  flex-direction: column;

  @media ${breakpoints.mobile} {
    display: flex;
    width: 100%;
  }
`;

export const FormFieldError = styled.span`
  color: ${LumaColor.NEGATIVE_60};
  white-space: nowrap;
  font-size: 0.625rem;
  margin-left: 0.625rem;
`;

export const LineBreak = styled.div`
  flex-basis: 100%;
`;
