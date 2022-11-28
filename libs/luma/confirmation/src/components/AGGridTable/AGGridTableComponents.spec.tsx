import { render, screen } from '@testing-library/react';
import selectEvent from 'react-select-event';
import { RowData, ConfirmationStatus } from './AGGridTable';
import {
  StatusComponent,
  StructuredComponent,
  formatIssuerColumn,
  UnderlierColumn,
} from './AGGridTableComponents';

const rowData: RowData = {
  Product: 'Merrill Lynch International & Co. C.V.',
  'Event Date': '2020-01-01',
  'Event Type': 'Maturity',
  Structure: 'Autocallable Contingent Interest Worst Of Barrier Note',
  Underliers: [
    {
      ticker: 'TSLA',
      name: 'Tesla',
      type: 'BLOOMBERG',
    },
  ],
  cusip: '',
  basketType: '',
  'Event Calculation': 'Review',
  confirmationStatus: {
    status: 'Review',
    physicalSettlementRates: [
      {
        issuerValue: 10,
        lumaValue: 15,
        physicalSettlementType: 'Shares',
        value: 0,
      },
      {
        issuerValue: 10,
        lumaValue: 0,
        physicalSettlementType: 'Cash in Lieu',
        value: 0,
      },
    ],
  },
  eventProductData: { productIdentifier: '' },
};

describe('AGGrid Event Status and Calculation Component', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<StatusComponent data={rowData} />);
    expect(baseElement).toBeInTheDocument();
  });
});

describe('AGGrid Structured Component', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<StructuredComponent data={rowData} />);
    expect(baseElement).toBeInTheDocument();
  });
});

describe('AGGrid Issuer Component', () => {
  it('Should render successfully', () => {
    const IssuerComponent = formatIssuerColumn;
    const { baseElement } = render(<IssuerComponent data={rowData} />);
    expect(baseElement).toBeInTheDocument();
  });
});

describe('AGGrid Underliers Component', () => {
  it('Should render successfully', () => {
    const UnderwriterComponent = UnderlierColumn;
    const { baseElement } = render(<UnderwriterComponent data={rowData} />);
    expect(baseElement).toBeInTheDocument();
  });
});
