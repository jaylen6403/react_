import { MetricsDiv, MetricsHeader } from './PlaceholderComponent.styles';

interface Props {
  headerString: string;
}
export const PlaceholderComponent = ({ headerString }: Props) => {
  return (
    <MetricsDiv>
      <MetricsHeader>{headerString}</MetricsHeader>
    </MetricsDiv>
  );
};
