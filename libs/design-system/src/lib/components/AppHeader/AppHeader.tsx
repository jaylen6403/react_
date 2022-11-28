import { Content, Heading, Root } from './AppHeader.styles';

export interface Props {
  /**
   * Class name for the header element.
   */
  className?: string;
  /**
   * Heading of the header.
   */
  title: React.ReactNode;
  /**
   * Content displayed in the center.
   */
  centerContent?: React.ReactNode;
  /**
   * Content displayed on the right.
   */
  rightContent?: React.ReactNode;
}

export const AppHeader = ({
  className,
  title,
  centerContent,
  rightContent,
}: Props) => {
  return (
    <Root className={className}>
      <Heading>{title}</Heading>

      <Content alignment="center">{centerContent}</Content>

      <Content alignment="right">{rightContent}</Content>
    </Root>
  );
};
