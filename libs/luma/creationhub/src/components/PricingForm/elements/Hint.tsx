import { colors, Icon } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

interface HintProps {
  type?: 'info' | 'success' | 'error';
  children: any;
}

export const HintWrapper = styled.div<{ bgColor: string }>`
  background-color: ${(p) => p.bgColor};
  display: flex;
  align-items: center;
  padding: 9px 16px;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const GroupIcon = styled(Icon)`
  margin-right: 0.4em;
  font-size: 0.8em;
  color: ${colors['luma-daintree']};
`;

export const ValidIcon = styled(Icon)`
  margin-right: 0.4em;
  font-size: 0.8em;
  color: ${colors['confirm-green']};
`;

export const InvalidIcon = styled(Icon)`
  margin-right: 0.4em;
  font-size: 0.8em;
  color: ${colors['error-red']};
`;

export const Text = styled.p`
  font-size: 0.6em;
  margin: 0;
`;

export function Hint({ type = 'info', children }: HintProps) {
  const variants = {
    info: {
      icon: <GroupIcon iconCode="info-circle" />,
      color: colors['neutral10'],
    },
    success: {
      icon: <ValidIcon iconCode="check-circle" />,
      color: colors['successGreen'],
    },
    error: {
      icon: <InvalidIcon iconCode="exclamation-circle" />,
      color: colors['failRed'],
    },
  };
  const HintIcon = variants[type].icon;
  const HintBgColor = variants[type].color;
  return (
    <HintWrapper bgColor={HintBgColor}>
      {HintIcon}
      <Text>{children}</Text>
    </HintWrapper>
  );
}
