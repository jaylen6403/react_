import styled from 'styled-components';

export const PerformanceChartSection = styled.section`
  padding-left: 30px;
  color: #2f3336;
  font-style: normal;
  width: 100%;
`;

export const UnderlyingPerformanceTitle = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;
  padding: 8px;
  font-family: 'IBMPlexSans-Bold', Helvetica;
  font-size: 10px;
  font-weight: 700;
`;

export const UnderlyingPerformanceField = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 100%;
  display: inline-block;
  font-family: 'IBMPlexSans-Regular', Helvetica;
  font-size: 8px;
  font-weight: 400;
`;
export const UnderlyingPerformanceValue = styled(UnderlyingPerformanceField)`
  background-color: #f2f4f5;
`;

export const TickerKey = styled.span<{ color: string }>`
  width: 10px;
  height: 10px;
  border: 3px solid ${(props) => props.color};
  border-radius: 5px;
  margin-right: 5px;
`;

export const UnderlyingProductListContainer = styled.ul`
  display: table;
  table-layout: fixed;
  padding: 8px;
  > li {
    display: table-cell;
    min-width: 100px;
  }
`;
