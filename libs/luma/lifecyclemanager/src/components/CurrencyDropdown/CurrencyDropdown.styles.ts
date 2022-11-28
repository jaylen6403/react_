import {
  colors,
  LumaFont,
  spacing,
  TextEntryField,
} from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const CurrencyDropdownWrapper = styled.div`
  width: 9.5rem;
  align-self: flex-end;
  height: 2rem;
  margin: 0;

  // The container of the main button
  span {
    background-color: ${colors.neutral00white};
    border-radius: 0.5rem;
  }
  // Leftmost label within the dropdown button
  .TextEntryMockLabel {
    align-items: center;
    color: ${colors.neutral80};
    height: 100%;
    margin: 0;
    position: absolute;
    padding: 0 0 0.125rem 0;
  }
  // Selected item label within the dropdown button
  input {
    align-items: left;
    cursor: pointer;
    left: 53%;
    width: 47%;
    margin: 0;
    padding: 0;
    position: absolute;
  }
  // Dropdown icon (chevron)
  svg {
    right: ${spacing.s};
    position: absolute;
    z-index: 1;
  }

  .text-entry--outlined {
    height: 2rem;
  }
  ul {
    max-height: 9rem;

    // Separate dropdown menu from main dropdown button
    margin: ${spacing.xs} 0 0;
    // Vertically align left side of dropdown label text with label in the main button and
    // vertically align checkmark icon with main button dropdown arrow/chevron
    padding: 0 ${spacing.xxs} 0 ${spacing.s};
    min-height: fit-content;

    // Push checkmark for selected item to the right of the dropdown
    svg {
      position: relative;
      // Put space between checkmark and scrollbar
      right: ${spacing.xxs};
    }
    li {
      margin: 0;

      div {
        // Separate currency label and checkmark (if selected)
        justify-content: space-between;
        // Prevent selected item text from being bolded
        span:has(+ span) {
          font-family: ${LumaFont.DEFAULT.REGULAR};
        }

        // Keep currency labels right-aligned
        .DropDownText {
          text-align: right;
          width: 2.65rem;
        }
      }
    }
  }
`;
