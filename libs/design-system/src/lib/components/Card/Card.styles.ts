import styled from 'styled-components';

interface CardWrapperProps {
  backgroundColor?: string;
  borderRadius?: number;
  flexDirection?: string;
  margin?: number;
  padding?: number;
}

export const CardWrapper = styled.div<CardWrapperProps>`
  display: flex;
  background: #ffffff;
  background-color: ${(props) => props.backgroundColor || '#ffffff'};
  border-radius: ${(props) => props.borderRadius || 0.9}rem;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  padding: ${(props) => props.padding || 0}rem;
  margin-left: ${(props) => props.margin || 0}rem;
`;
