import styled from 'styled-components';

export const Value = styled.div`
  color: rgb(151, 145, 151);
  font-size: 0.8125rem;
`;

export const Name = styled.div`
  color: rgb(85, 77, 86);
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
  border: 0.125rem solid rgba(85, 77, 86, 0.2);
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
