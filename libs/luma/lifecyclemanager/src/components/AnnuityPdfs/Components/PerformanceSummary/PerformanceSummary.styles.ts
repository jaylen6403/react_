import styled from 'styled-components';

export const SummaryGroup = styled.div`
  padding-left: 18px;
  position: relative;
`;

export const SummaryTitleContainer = styled.div`
  padding-bottom: 15px;
  color: #2f3336;
  font-family: 'IBMPlexSans-Bold', Helvetica;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
`;

export const SummaryTitle = styled.div`
  display: flex;
  align-items: center;
`;
// &:after {
//   content: '';
//   height: 1px;
//   background-color: black;
//   flex-grow: 1;
//   margin-left: 1rem;
// }

export const SummaryTable = styled.table`
  padding-left: 10px;
  padding-bottom: 5px;
`;

export const SummaryContainer = styled.div`
  display: flex;
  margin-right: auto;
  gap: 10px;
`;

export const SummaryField = styled.div`
  color: #2f3336;
  font-family: 'IBMPlexSans-Regular', Helvetica;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  display: inline-block;

  background-color: #f2f4f5;
  padding: 5px 10px;
  border-radius: 5px;
`;
export const SummaryValue = styled.span`
  color: #2f3336;
  font-family: 'IBMPlexSans-Regular', Helvetica;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
`;
