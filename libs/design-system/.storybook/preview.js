import { initialize, mswDecorator } from 'msw-storybook-addon';
import { withDesign } from 'storybook-addon-designs';
import { Provider } from 'react-redux';

import { GlobalStyle } from '../src/lib/globalStyle';
import { LumaFontsIBM, LumaDimensions } from '../src/lib/components-Luma';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { store } from '@luma-fe-workspace/redux';
import { BrowserRouter } from 'react-router-dom';

// Initialize MSW
initialize();

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Styleguide', 'Components', '*', 'Secondaries'],
    },
  },
  layout: 'centered',
};

// Provide the MSW addon decorator globally
export const decorators = [
  (Story) => (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <LumaFontsIBM />
        <LumaDimensions />

        <Story />
      </Provider>
    </BrowserRouter>
  ),
  mswDecorator,
  withDesign,
];
