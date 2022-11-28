export const screenSizes = {
  largeDesktop: { min: 1440 },
  desktop: { max: 1439, min: 769 },
  tablet: { max: 768, min: 561 },
  phablet: { max: 560, min: 349 },
  mobile: { max: 348 },
};

export const breakpoints = {
  largeDesktop: `(min-width: ${screenSizes.largeDesktop.min}px)`,
  desktop: `(max-width: ${screenSizes.desktop.max}px) and (min-width: ${screenSizes.desktop.min}px)`,
  tablet: `(max-width: ${screenSizes.tablet.max}px) and (min-width: ${screenSizes.tablet.min}px)`,
  phablet: `(max-width: ${screenSizes.phablet.max}px) and (min-width: ${screenSizes.phablet.min}px)`,
  mobile: `(max-width: ${screenSizes.mobile.max}px)`,
};
