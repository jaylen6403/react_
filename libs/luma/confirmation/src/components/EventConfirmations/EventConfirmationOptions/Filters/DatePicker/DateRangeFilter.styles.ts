import styled from 'styled-components';
import { LumaColor, Icon } from '@luma-fe-workspace/design-system';
import { createGlobalStyle } from 'styled-components';

export const DatePickerWrapperStyles = createGlobalStyle`
    .react-datepicker-wrapper {
        width: auto;
        height: 2.125rem;
        width: 18.5rem;
        position: relative;
    }

    .react-datepicker__input-container {
        height: 100%;
    }

    .react-datepicker__current-month {
        font-size: 0.875rem;
        color: ${LumaColor.NEUTRAL_80};
    }

    .react-datepicker {
        width: 100%;
        font-family: 'IBM Plex Sans';
        border: 0.063rem solid ${LumaColor.NEUTRAL_80};
        border-radius: 0.5rem;
    }

    .date_picker input {
        height: 100%;
        border: 0.063rem solid ${LumaColor.NEUTRAL_40};
        width: 100%;
        border-radius: 0.5rem;
        font-size: 0.75rem;
        color: ${LumaColor.NEUTRAL_80};
        padding-left: 0.75rem;
        outline: none;
        font-weight: bold;

        &:focus {
            border: 0.063rem solid ${LumaColor.NEUTRAL_80};
        }

        &::placeholder {
            font-weight: 400;
            font-family: 'IBM Plex Sans';
        }
    }

    .react-datepicker__triangle {
        display: none;
    }

    .react-datepicker__tab-loop .react-datepicker-popper {
        padding-top: 0.5rem;
        width: 18.5rem;
    }

    .react-datepicker__month-container {
        width: 100%;
    }

    .react-datepicker__day-names {
        display: flex;
        justify-content: space-between;
        font-size: 0.688rem;
        margin: 1.5rem 1rem 0 1rem;
        padding: 0 0.25rem 0.25rem 0.25rem;
        border-bottom: 0.063rem solid ${LumaColor.NEUTRAL_20};
    }

    .react-datepicker__day-name {
        width: 1.25rem;
        line-height: 0.688rem;
        margin: 0;
        color: ${LumaColor.NEUTRAL_60};
    }

    .react-datepicker__day {
        line-height: 0.75rem;
        font-size: 0.75rem;
        margin: 0;
        width: 1.25rem;
        height: 1.25rem;
        display: flex;
        justify-content: center;
        align-items: center;

        &--disabled {
            color: ${LumaColor.NEUTRAL_60};
        }

        &--in-range, &--selected, &--in-selecting-range {
            background-color: ${LumaColor.NEUTRAL_40} !important;
            color: inherit;
            font-weight: bold !important;
            border-radius: 0.5rem;
        }

        &--today {
            font-weight: inherit;
        }

        &--keyboard-selected {
            background-color: ${LumaColor.NEUTRAL_00_WHITE};
            color: inherit;

            &:hover {
                background-color: ${LumaColor.NEUTRAL_40} !important;
            }
        }
    }

    .react-datepicker__header {
        background-color: inherit;
        border-bottom: none;
        padding-bottom: 0;
        padding-top: 1rem;
    }

    .react-datepicker__month {
        margin: 0;
        padding-top: 1rem;
        padding-bottom: 0.5rem;
    }

    .react-datepicker__week {
        justify-content: space-between;
        margin: 0 1rem;
        padding: 0 0.25rem 0.75rem 0.25rem;
        display: flex;
    }

    .react-datepicker__navigation {
        margin-top: 0.5rem;
    }

    .react-datepicker__navigation-icon {
        &::before {
            border-color: ${LumaColor.NEUTRAL_80};
            height: 0.5rem;
            width: 0.5rem;
            border-width: 0.125rem 0.125rem 0 0;
        }
    }
`;

export const CalendarIcon = styled(Icon)`
  position: absolute;
  right: 0.75rem;
  bottom: 0;
  top: 0;
  margin: auto 0;
`;

export const DatePickerWrapper = styled.div`
  position: relative;
`;
