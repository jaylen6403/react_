import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { LumaDashboard } from './LumaDashboard';
import { store } from '@luma-fe-workspace/redux';
import { Provider } from 'react-redux';

describe('LumaDashoard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <Provider store={store}>
          <LumaDashboard />
        </Provider>
      </Router>
    );
    expect(baseElement).toBeInTheDocument();
  });
});
