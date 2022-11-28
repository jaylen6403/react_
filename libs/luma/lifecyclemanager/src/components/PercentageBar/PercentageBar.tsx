import {
  Container,
  PercentageFill,
  PercentageBarContainer,
  PercentageText,
} from './PercentageBar.styles';

type PercentageBarProps = {
  percentage: number;
};
export const PercentageBar = ({ percentage }: PercentageBarProps) => {
  return (
    <Container>
      <PercentageBarContainer>
        <PercentageFill percentageFill={percentage} />
      </PercentageBarContainer>
      <PercentageText>{percentage.toFixed(1)}%</PercentageText>
    </Container>
  );
};
