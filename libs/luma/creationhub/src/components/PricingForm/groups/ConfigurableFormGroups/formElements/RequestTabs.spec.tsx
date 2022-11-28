import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { RequestTabs } from './RequestTabs';
import { PricingFormVariants } from '../../../PricingFormUtils';

describe('RequestTabs', () => {
  const requestTabs = ['tab1', 'tab2', 'tab3'];
  const activeTab = 'tab2';
  const onTabClick = jest.fn();
  const formVariant = PricingFormVariants.PRICING;
  const props = { requestTabs, activeTab, onTabClick, formVariant };

  it('should render properly', () => {
    const { baseElement } = render(<RequestTabs {...props} />);
    expect(baseElement).toBeInTheDocument();
  });

  it('should render Pricing Id', () => {
    const { baseElement } = render(
      <RequestTabs {...props} formVariant={PricingFormVariants.PRICING} />
    );
    expect(baseElement).toBeInTheDocument();
    expect(
      screen.getByText(`Pricing: (${requestTabs[0]})`)
    ).toBeInTheDocument();
  });

  it('should render Rfq Id', () => {
    const { baseElement } = render(
      <RequestTabs {...props} formVariant={PricingFormVariants.RFQ} />
    );
    expect(baseElement).toBeInTheDocument();
    expect(screen.getByText(`RFQ: (${requestTabs[0]})`)).toBeInTheDocument();
  });

  it('should render Request Id', () => {
    const { baseElement } = render(
      <RequestTabs {...props} formVariant={PricingFormVariants.NEW_PRICING} />
    );
    expect(baseElement).toBeInTheDocument();
    expect(
      screen.getByText(`Request ID: (${requestTabs[0]})`)
    ).toBeInTheDocument();
  });

  it('should click on not active tab', () => {
    const { baseElement } = render(<RequestTabs {...props} />);
    expect(baseElement).toBeInTheDocument();
    const notActiveTab = screen.getByText(`Pricing: (${requestTabs[0]})`);
    fireEvent.click(notActiveTab);
    expect(onTabClick).toBeCalledTimes(1);
  });
});
