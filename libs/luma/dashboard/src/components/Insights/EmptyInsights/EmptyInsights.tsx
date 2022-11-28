import { StyledEmptyInsightsBody, MainText } from './EmptyInsights.style';
import { LumaFlameNeutral } from '@luma-fe-workspace/design-system';

interface Props {
  text: string;
}

export const EmptyInsights = ({ text }: Props) => {
  return (
    <StyledEmptyInsightsBody>
      <LumaFlameNeutral />
      <MainText>{text}</MainText>
    </StyledEmptyInsightsBody>
  );
};
