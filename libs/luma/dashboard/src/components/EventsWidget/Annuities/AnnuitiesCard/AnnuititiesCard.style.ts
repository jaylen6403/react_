import styled from 'styled-components';
import { breakpoints, colors } from '@luma-fe-workspace/design-system';

export const EventsWidgetCardTableCell = styled.td`
  width: 40%;
  text-align: left;
`;
export const PolicyValue = styled.p`
  width: 60%;
  text-align: left;
  border: none;
  padding: 0;
  margin-top: 0;
`;
export const PolicyHeading = styled.p`
  font-weight: 400;
  color: ${colors.neutral80};
  text-align: left;
  vertical-align: top;
  margin-top: 0;
  width: 40%;
`;

export const PolicyDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0;
  max-height: 1.25rem;
`;
export const EventsWidgetCardTableHeading = styled.th`
  font-weight: 400;
  color: ${colors.neutral80};
  text-align: left;
  vertical-align: top;
  width: 60%;
`;

export const EventsWidgetValue = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${colors.neutral80};
  margin: 0.125rem 0;
`;
export const MidValueCont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0 1.5rem 0;
`;
export const EventsWidgetCardTable = styled.table`
  color: ${colors.greyDark};
`;

export const CusipLink = styled.a`
  color: ${colors.primary50};
  font-size: 0.75rem;
  text-decoration: none;
  &:hover {
    text-decoration: revert;
  }
`;

export const EventsWidgetCardHeading = styled.h3<{ isTooltip?: boolean }>`
  font-weight: 500;
  margin: 0 0 0.125rem 0;
  font-size: ${(props) => (props.isTooltip ? '0.875rem' : '1rem')};
`;

export const EventsWidgetCardHeader = styled.div`
  color: ${colors.neutral80};
`;

export const EventsWidgetCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  border: 0.0625rem solid #c4cdd1;
  font-size: 0.75rem;
  height: 15.625rem;
  min-width: 15.625rem;
  max-width: 15.625rem;
  margin-right: 0.625rem;
  padding: 0.625rem;

  &:last-child {
    margin-right: 0;
  }
  &:hover {
    transform: scale(103%);
    transition-duration: 0.15s;
  }
  @media ${breakpoints.mobile && breakpoints.phablet} {
    &:hover {
      transform: revert;
    }
  }
`;
