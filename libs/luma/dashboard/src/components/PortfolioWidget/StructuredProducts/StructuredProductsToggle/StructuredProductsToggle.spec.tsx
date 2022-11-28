import { render, screen } from '@testing-library/react';
import selectEvent from 'react-select-event';

import { StructuredProductsToggle } from './StructuredProductsToggle';
import { StructuredProductsTypes } from '../structuredProductsPortfolioUtils';
import { colors } from '@luma-fe-workspace/design-system';

describe('Structured Products Toggle Component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StructuredProductsToggle
        screenWidth={1080}
        setTableToRender={() => StructuredProductsTypes.ReturnType}
        tableToRender={StructuredProductsTypes.ReturnType}
      />
    );
    expect(baseElement).toBeInTheDocument();
  });

  it('should render type & issuer buttons on screens > 544', () => {
    render(
      <StructuredProductsToggle
        screenWidth={1080}
        setTableToRender={() => StructuredProductsTypes.ReturnType}
        tableToRender={StructuredProductsTypes.ReturnType}
      />
    );

    const typesButton = screen.getByRole('button', { name: /type/i });
    expect(typesButton).toBeEnabled();
    expect(typesButton).toHaveStyle({
      color: colors.neutral80,
    });
    const issuerButton = screen.getByRole('button', { name: /issuers/i });
    expect(issuerButton).toHaveStyle({
      color: colors.neutral60,
    });
  });

  it('should render a dropdown defaulting to "return type" on screens <= 544', () => {
    render(
      <StructuredProductsToggle
        screenWidth={544}
        setTableToRender={() => StructuredProductsTypes.ReturnType}
        tableToRender={StructuredProductsTypes.ReturnType}
      />
    );

    const typesButton = screen.getByRole('listbox', { name: /return type/i });
    expect(typesButton).toBeInTheDocument();
  });
});

describe('dropdown select on screens <= 544', () => {
  it('Issuer should appear when listbox is clicked', async () => {
    render(
      <StructuredProductsToggle
        screenWidth={544}
        setTableToRender={() => StructuredProductsTypes.ReturnType}
        tableToRender={StructuredProductsTypes.ReturnType}
      />
    );

    await selectEvent.select(screen.getByRole('listbox'), [
      'Return Type',
      'Issuer',
    ]);
    expect(
      screen.getByRole('listbox', { name: /issuer/i })
    ).toBeInTheDocument();
  });
});
