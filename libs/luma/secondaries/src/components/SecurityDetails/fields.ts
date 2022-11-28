export type Field = {
  label: string;
  dataKeys: string[];
};

export type FieldSection = {
  sectionName: string;
  data: Record<string, unknown>;
};

export const FIELD_SECTION_NAMES: string[] = [
  'Core',
  'Protection',
  'Coupon',
  'Call',
  'Events',
  'Performance',
];

export const FIELD_SECTIONS: FieldSection[] = [
  {
    sectionName: 'Product',
    data: {
      'Return Type': '',
      'Registration Type': '',
      'Basket Type': '',
      Tenor: '',
    },
  },
  {
    sectionName: 'Dates',
    data: {
      Pricing: '',
      Issue: '',
      'Final Valuation': '',
      Maturity: '',
    },
  },
  {
    sectionName: 'Protection',
    data: {
      'Protection Type': '',
      'Principal Barrier Level (Final)': '',
      'Principal Barrier Level Min': '',
      'Principal Barrier Level Max': '',
      'Principal Buffer Level (Final)': '',
      'Principal Buffer Level Min': '',
      'Principal Buffer Level Max': '',
      'Protection Level': '',
    },
  },
  {
    sectionName: 'Coupon',
    data: {
      'Coupon Type': '',
      'Min Coupon Rate Per Annum': '',
      'Min Coupon Rate Per Annum Min': '',
      'Min Coupon Rate Per Annum Max': '',
      'Coupon Rate Per Annum (Current)': '',
      'Coupon Rate Per Annum Min': '',
      'Coupon Rate Per Annum Max': '',
      'Min Coupon Pay Period': '',
    },
  },
  {
    sectionName: 'Call',
    data: {
      'Call Type': '',
      'Call Barrier Level': '',
      'Call Barrier Level Min': '',
      'Call Barrier Level Max': '',
      'Call Premium (Current)': '',
      'Call Premium Min': '',
      'Call Premium Max': '',
      'Call Observation Frequency': '',
      'Call Period Observation Type': '',
      'Number of No Call Periods': '',
    },
  },
  {
    sectionName: 'Events',
    data: {},
  },
  {
    sectionName: 'Performance',
    data: {},
  },
];
