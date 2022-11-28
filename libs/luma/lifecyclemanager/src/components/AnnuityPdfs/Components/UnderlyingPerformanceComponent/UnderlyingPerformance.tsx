import {
  TickerKey,
  UnderlyingProductListContainer,
  PerformanceChartSection,
  UnderlyingPerformanceTitle,
  UnderlyingPerformanceField,
  UnderlyingPerformanceValue,
} from './UnderlyingPerformance.styles';

interface UnderlyingPerformanceElement {
  field: string;
  value: string | number;
  color?: string;
}

interface UnderlyingPerformanceProps {
  title: string;
  color: string;
  underlyingTicker: string;
  data: UnderlyingPerformanceElement[];
}

export const UnderlyingPerformance = ({
  title,
  data,
}: UnderlyingPerformanceProps) => {
  return (
    <PerformanceChartSection>
      <div>
        <UnderlyingPerformanceTitle>{title}</UnderlyingPerformanceTitle>
        <div>
          <UnderlyingPerformanceField>
            <UnderlyingProductListContainer>
              {data.map(
                (dataElement: UnderlyingPerformanceElement, index: number) => (
                  <li key={index}>{dataElement.field}</li>
                )
              )}
            </UnderlyingProductListContainer>
          </UnderlyingPerformanceField>
          <UnderlyingPerformanceValue>
            <UnderlyingProductListContainer>
              {data.map(
                (dataElement: UnderlyingPerformanceElement, index: number) => {
                  if (dataElement.color) {
                    return (
                      <li>
                        <TickerKey color={dataElement.color} />
                        {dataElement.value}
                      </li>
                    );
                  } else {
                    return <li key={index}>{dataElement.value}</li>;
                  }
                }
              )}
            </UnderlyingProductListContainer>
          </UnderlyingPerformanceValue>
        </div>
        {/* <img
          className="line-graph"
          src="./img/performance-report---luma-bitmap-F4884C4B-1BFD-43DD-903B-98C545195D32.png"
          alt="todo-graph"
        /> */}
        {/* <div className="graph-legend">
          <div className="graph-legend-text">
            <div className="ibmplexsans-medium-mine-shaft-6px">
              <span className="rectangle-index"></span>Underlying
            </div>
            <div className="ibmplexsans-medium-mine-shaft-6px">
              <span className="rectangle-base"></span>Initial Level
            </div>
            <div className="ibmplexsans-medium-mine-shaft-6px">
              <span className="rectangle-coupon-threshhold"></span>Coupon
              Threshhold
            </div>
            <div className="ibmplexsans-medium-mine-shaft-6px">
              <span className="rectangle-principal-threshhold"></span>Principal
              Threshold (Not shown if Principal Threshold = Coupon Threshold)
            </div>
          </div>
        </div> */}
      </div>
    </PerformanceChartSection>
  );
};
