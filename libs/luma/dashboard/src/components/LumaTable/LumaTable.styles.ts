import styled from 'styled-components';
import { breakpoints, LumaColor } from '@luma-fe-workspace/design-system';

export const Table = styled.div<{
  numberColumns: number;
  mobileColumns: number;
  annuitiesTracker: boolean | undefined;
}>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.annuitiesTracker
      ? '1fr 1fr 1fr minmax(5.25rem, 10.5rem) 1fr'
      : `repeat(${props.numberColumns}, auto)`};
  @media ${breakpoints.tablet} {
    grid-template-columns: ${(props) =>
      props.annuitiesTracker
        ? '1fr minmax(5.25rem, 10.5rem) 0.5fr'
        : `repeat(${props.mobileColumns}, auto)`};
    width: 100%;
  }
  @media ${breakpoints.phablet} {
    grid-template-columns: ${(props) =>
      props.annuitiesTracker
        ? '1fr 5.25rem 0.5fr'
        : `repeat(${props.mobileColumns}, auto)`};
  }
`;

export const HeaderRow = styled.div`
  color: ${LumaColor.NEUTRAL_80};
  display: contents;
  font-weight: 500;
`;

export const RowContainer = styled.a<{ link: boolean }>`
  display: contents;

  :hover {
    > div {
      background: ${(props) =>
        props.link ? `${LumaColor.PRIMARY_10}` : 'inherit'};
    }

    a {
      text-decoration: none;
    }
  }

  > div:last-child {
    padding-right: ${(props) => (props.link ? '0.25rem' : '0')};
  }

  > div:first-child {
    padding-left: ${(props) => (props.link ? '0.25rem' : '0')};
  }

  @media ${breakpoints.tablet} {
    > div:last-child {
      padding-right: 0;
    }

    > div:first-child {
      padding-left: 0;
    }
  }
`;

export const RowDivider = styled.div`
  grid-column: 1 / -1;
  height: 0.0625rem;
  background-color: ${LumaColor.NEUTRAL_40};
`;
