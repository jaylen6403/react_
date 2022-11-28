import styled, { createGlobalStyle } from 'styled-components';
import { LumaFont } from './LumaFonts';

interface LumaFontsProps {
  font: keyof typeof LumaFont.DEFAULT;
  size: string;
}

export const DIMENSION_MAP = {
  fontSizes: {
    h1: '2rem',
    h2: '1.75rem',
    h3: '1.5rem',
    h4: '1.25rem',
    b1: '1rem',
    b2: '0.875rem',
    b3: '0.75rem',
    b4: '0.688rem',
  },
};

export const LumaFontsIBM = createGlobalStyle`
    @font-face {
        font-family: ${LumaFont.DEFAULT.LIGHT};
        src: url('./fonts/IBMPlexSans/IBMPlexSans-Light.woff2') format('woff2'),
        url('./fonts/IBMPlexSans/IBMPlexSans-Light.ttf') format('truetype'),
        url('./fonts/IBMPlexSans/IBMPlexSans-Light.woff') format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: fallback;
    }
    @font-face {
        font-family: ${LumaFont.DEFAULT.REGULAR};
        src: url('./fonts/IBMPlexSans/IBMPlexSans-Regular.woff2') format('woff2'),
        url('./fonts/IBMPlexSans/IBMPlexSans-Regular.ttf') format('truetype'),
        url('./fonts/IBMPlexSans/IBMPlexSans-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
        font-display: fallback;
    }
    @font-face {
        font-family: ${LumaFont.DEFAULT.MEDIUM};
        src: url('./fonts/IBMPlexSans/IBMPlexSans-Medium.woff2') format('woff2'),
        url('./fonts/IBMPlexSans/IBMPlexSans-Medium.ttf') format('truetype'),
        url('./fonts/IBMPlexSans/IBMPlexSans-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: fallback;
    }
    @font-face {
        font-family: ${LumaFont.DEFAULT.SEMI_BOLD};
        src: url('./fonts/IBMPlexSans/IBMPlexSans-SemiBold.woff2') format('woff2'),
        url('./fonts/IBMPlexSans/IBMPlexSans-SemiBold.ttf') format('truetype'),
        url('./fonts/IBMPlexSans/IBMPlexSans-SemiBold.woff') format('woff');
        font-weight: 600;
        font-style: normal;
        font-display: fallback;
    }
    @font-face {
        font-family: ${LumaFont.DEFAULT.BOLD};
        src: url('./fonts/IBMPlexSans/IBMPlexSans-Bold.woff2') format('woff2'),
        url('./fonts/IBMPlexSans/IBMPlexSans-Bold.ttf') format('truetype'),
        url('./fonts/IBMPlexSans/IBMPlexSans-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
        font-display: fallback;
    }
`;

export const LumaDimensions = createGlobalStyle`
    h1 {
      font-size: ${DIMENSION_MAP.fontSizes.h1};
    }
    h2 {
      font-size: ${DIMENSION_MAP.fontSizes.h2};
    }
    h3 {
      font-size: ${DIMENSION_MAP.fontSizes.h3};
    }
    h4 {
      font-size: ${DIMENSION_MAP.fontSizes.h4};
    }
    b1 {
      font-size: ${DIMENSION_MAP.fontSizes.b1};
    }
    b2 {
      font-size: ${DIMENSION_MAP.fontSizes.b2};
    }
    b3 {
      font-size: ${DIMENSION_MAP.fontSizes.b3};
    }
    b4 {
      font-size: ${DIMENSION_MAP.fontSizes.b4};
    }
`;

export const Text = styled.div<LumaFontsProps>`
  ${(props) =>
    `
    font-family: ${LumaFont.DEFAULT[props.font]};
    font-size: ${props.size};
  `}
`;
