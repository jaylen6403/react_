import { Card, LumaFlame } from '@luma-fe-workspace/design-system';
import {
  EmptyStates,
  emptyStateOptions,
  generateLink,
} from '../../utils/emptyStateUtils';

import {
  Title,
  Header,
  EmptyWidget,
  MainText,
  ContentContainer,
  SubText,
  LinkText,
  LinkCont,
} from './EmptyState.style';

interface Props {
  emptyStateType: EmptyStates;
  isSmall: boolean;
  margin?: number;
}

export const EmptyState = ({ emptyStateType, isSmall, margin }: Props) => {
  const emptyStateInfo = emptyStateOptions[emptyStateType];

  return (
    <Card flexDirection="column" backgroundColor="transparent" margin={margin}>
      <Title>
        <Header>{emptyStateInfo.cardTitle}</Header>
      </Title>
      <EmptyWidget isSmall={isSmall}>
        <ContentContainer>
          <LumaFlame />
          <MainText>{emptyStateInfo.mainText}</MainText>
          {emptyStateInfo.subText &&
          emptyStateInfo.link &&
          emptyStateInfo.linkText ? (
            <LinkCont>
              <SubText>{emptyStateInfo.subText}</SubText>
              <LinkText
                onClick={(e) => {
                  e.preventDefault();
                  generateLink(emptyStateType);
                }}
              >
                {emptyStateInfo.linkText}
              </LinkText>
            </LinkCont>
          ) : null}
        </ContentContainer>
      </EmptyWidget>
    </Card>
  );
};
