import styled from 'styled-components';
import {
  colors,
  Dropdown,
  DropdownIcon,
} from '@luma-fe-workspace/design-system';
import { Modal } from '../Modal';
import { FONT_IBM_SANS } from '../../lib/luma-secondaries.styles';

const secDetDefaultPaddingAndMargin = `1rem`;
export const SecurityDetailsLogoWrapper = styled.div<{
  width?: string;
  height?: string;
  margin?: string;
}>`
  width: ${(props) => props.width ?? '10rem'};
  height: ${(props) => props.height ?? '2rem'};
  margin: ${(props) => props.margin ?? '0 auto'};
`;

export const SecurityDetailsDropdown = styled(Dropdown)`
  border-color: ${colors.greyLighter};
  border-style: solid;
  border-radius: 0.25rem;
  border-width: 0.0625rem;
  margin: 0 0.25rem;

  &:last-child {
    margin: 0 0 0 0.25rem;
  }

  & ${DropdownIcon}.leftIcon {
    margin: 0 0.375rem 0 0;
    color: ${colors.greyLight};
  }

  & ${DropdownIcon}.rightIndicator {
    margin: 0 0 0 0.375rem;
  }
`;

export const SectionButton = styled.button`
  background-color: white;
  border-style: solid;
  border-width: 0.0625rem;
  border-color: white;
  font-weight: 400;
  font-size: 0.75rem;
  font-family: ${FONT_IBM_SANS};
  letter-spacing: 0.03em;
  line-height: 1rem;
  color: ${colors.greyMedium};

  &:hover:not([disabled]) {
    color: ${colors.oceanDarker};
  }
  &:focus:not([disabled]) {
    color: ${colors.blueMedium};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding: 0 ${secDetDefaultPaddingAndMargin};
`;

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableHeader = styled.h3`
  color: ${colors.greyMedium};
  font-family: ${FONT_IBM_SANS}, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  white-space: pre-wrap;
`;

export const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & .sectionButtons {
    margin-left: ${secDetDefaultPaddingAndMargin};
    margin-top: ${secDetDefaultPaddingAndMargin};
    margin-bottom: ${secDetDefaultPaddingAndMargin};

    button {
      border-right: 0.0625rem solid ${colors.greyLighter};
      margin-right: 0.0625rem;
      margin-left: 0.0625rem;
      :last-child {
        border-right: none;
      }
      :first-child {
        margin-left: 0;
        padding-left: 0;
        border-left: none;
      }
    }
  }

  & #ProductTable {
    flex: 2;
    margin-right: 1rem;
  }

  & #DatesTable {
    flex: 1;
  }

  & #issuerLogo {
    height: auto;
    width: 9.375rem;
    margin: 0 ${secDetDefaultPaddingAndMargin} ${secDetDefaultPaddingAndMargin}
      0;
  }

  && #documentsDropdown {
    margin-right: ${secDetDefaultPaddingAndMargin};
    & ul {
      right: 0;
      width: max-content;
    }
  }

  &#issuerDescription {
    color: ${colors.greyMedium};
    font-family: ${FONT_IBM_SANS}, sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
  }
`;

export const SecurityDetailsModal = styled(Modal)`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none;
  }
`;
