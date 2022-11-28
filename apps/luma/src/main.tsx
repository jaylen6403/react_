import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '@luma-fe-workspace/design-system';
import { store } from '@luma-fe-workspace/redux';
import { isCheckAccessibility } from '@luma-fe-workspace/utility';

import { App } from './components/App';
if (isCheckAccessibility) {
  import('@axe-core/react').then((axe) => {
    axe.default(React, ReactDOM, 1000);
  });
}
const rootElement = document.getElementById('root');
const rootComponent = (
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
ReactDOM.render(rootComponent, rootElement);
