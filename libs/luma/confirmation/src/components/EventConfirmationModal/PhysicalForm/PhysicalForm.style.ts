import styled from 'styled-components';
import {
  colors,
  DropdownBaseMenuItem,
  DropdownIcon,
  Menu,
  StyledButton,
} from '@luma-fe-workspace/design-system';

export const LabelText = styled.label`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  color: ${colors.neutral80};
  margin-left: 1.5rem;
  width: 5rem;
`;

export const Input = styled.input`
  width: 10rem;
  height: 2rem;
  margin: 0 0 0 1rem;
  padding: 0.5rem 0.625rem 0.563rem 0.75rem;
  border-radius: 8px;
  border: solid 1px ${colors.neutral40};

  ::placeholder {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.75rem;
    font-weight: normal;
    color: ${colors.neutral60};
  }
`;

export const Form = styled.form``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1.5rem 0 0 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 12rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  height: 5.5rem;
  padding: 0 1.5rem;
  border-top: 1px solid ${colors.neutral40};
`;
