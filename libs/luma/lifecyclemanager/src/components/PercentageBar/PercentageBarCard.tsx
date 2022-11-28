import { PercentageBar } from './PercentageBar';
import {
  CardContainer,
  Title,
  Content,
  Currency,
} from './PercentageBarCard.styles';

export type PercentageBarCardProps = {
  percentage: number;
  title: string;
  /**
   * The number or value shown above the percentage bar
   */
  content: number;
  /**
   * The number of decimal places to use for the value shown above the percentage bar
   */
  contentDecimalPlaces?: number;
  currency?: string;
};
export const PercentageBarCard = ({
  percentage,
  contentDecimalPlaces = 0,
  title,
  content,
  currency,
}: PercentageBarCardProps) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Content>
        {content.toLocaleString(undefined, {
          minimumFractionDigits: contentDecimalPlaces,
          maximumFractionDigits: contentDecimalPlaces,
        })}
        {currency && <Currency>{currency}</Currency>}
      </Content>
      <PercentageBar percentage={percentage} />
    </CardContainer>
  );
};
