import { initialize, mswDecorator } from 'msw-storybook-addon';
import { withDesign } from 'storybook-addon-designs';
import { Provider } from 'react-redux';

import { GlobalStyle } from '@luma-fe-workspace/design-system';
import { store } from '@luma-fe-workspace/redux';
import { BrowserRouter } from 'react-router-dom';

// Initialize MSW
initialize();

export const parameters = {
  actions: { argTypesRegex: '^(on|handle)[A-Z].*' },
};

// Provide the MSW addon decorator globally
export const decorators = [
  (Story) => (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />

        <Story />
      </Provider>
    </BrowserRouter>
  ),
  mswDecorator,
  withDesign,
];
