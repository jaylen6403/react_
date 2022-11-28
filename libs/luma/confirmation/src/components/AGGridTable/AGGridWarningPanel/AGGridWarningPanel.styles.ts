import styled from 'styled-components';
import { colors } from '@luma-fe-workspace/design-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AGGridWarningWrapper = styled.div`
  font-family: IBM Plex Sans;
  border-radius: 7px;
  border: solid 1px ${colors.neutral40};
`;

export const AGGridWarningHeaderRow = styled.div`
  background-color: ${colors.neutral20};
  height: 3rem;
  border-radius: 7px 7px 0px 0px;
`;

export const AGGridWarningBody = styled.div`
  background-color: ${colors.neutral00white};
  height: 25rem;
  border-radius: 0px 0px 7px 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AGGridWarningMessage = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

export const AGGridWarningIcon = styled(FontAwesomeIcon)`
  color: ${colors.primary50};
  height: 4rem;
  width: 4rem;
  padding-bottom: 2rem;
`;
