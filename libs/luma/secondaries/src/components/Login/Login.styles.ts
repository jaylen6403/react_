import styled from 'styled-components';
import { colors } from '@luma-fe-workspace/design-system';

export const LoginHeader = styled.p`
  color: ${colors['graphing-luma-daintree-3']};
  font-family: 'SF Pro Text', sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 80px;
  text-align: center;
`;

export const LoginContainer = styled.div`
  border: 2px solid ${colors['grid-blue-3']};
  border-radius: 19px;
  width: 846px;
  height: 520px;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  border-radius: 30px;
  border: 1px solid ${colors['graphing-blue-gray-3']};
  color: #6e6e6e;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.2px;
  line-height: 20px;
  padding: 12px 22px 11px;
  width: 70%;
  ::placeholder {
    color: ${colors['text-grey']};
  }
  margin-bottom: 35px;
`;

export const Button = styled.button`
  background-color: ${colors['button-hover']};
  border-radius: 24px;
  border: 1px solid ${colors['button-hover']};
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  min-width: 220px;
  padding: 13px;
`;
