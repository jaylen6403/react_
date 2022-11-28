import { CardWrapper } from './Card.styles';

interface CardProps {
  backgroundColor?: string;
  borderRadius?: number;
  flexDirection?: string;
  margin?: number;
  padding?: number;
  children: React.ReactNode;
}

export const Card = ({
  backgroundColor,
  borderRadius,
  flexDirection,
  margin,
  padding,
  children,
}: CardProps) => (
  <CardWrapper
    backgroundColor={backgroundColor}
    borderRadius={borderRadius}
    flexDirection={flexDirection}
    padding={padding}
    margin={margin}
  >
    {children}
  </CardWrapper>
);
