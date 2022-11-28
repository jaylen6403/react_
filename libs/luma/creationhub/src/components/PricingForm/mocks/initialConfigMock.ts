import {
  ComputationMode,
  PricingInCreation,
  PricingState,
  ValueTypes,
} from '@luma-fe-workspace/redux';

const initialConfigMock: PricingInCreation = {
  state: 'IN_CREATION' as PricingState,
  product: {
    params: {
      PROGRAM_TYPE: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'DEFAULT',
        label: 'Default',
      },
      BARRIER_TYPE: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'EUROPEAN',
        label: 'European',
      },
      QUOTING_TYPE: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'DIRTY',
        label: 'Dirty',
      },
      PRODUCT_TYPE: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'CALLABLE_BRC',
        label: 'Callable BRC',
      },
      COUNTRIES_OF_DISTRIBUTION: {
        type: ValueTypes.MultiEnum,
        computationMode: ComputationMode.MODIFIABLE,
        values: [],
      },
      ISSUE_SIZE: {
        type: ValueTypes.Numeric,
        computationMode: ComputationMode.MODIFIABLE,
        value: 500000,
      },
      FEE: {
        type: ValueTypes.Numeric,
        computationMode: ComputationMode.MODIFIABLE,
        value: 1,
      },
      BASKET_WEIGHTING: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'CUSTOM',
        label: 'Custom',
      },
      COUPON_STEP_DIRECTION: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'NONE',
        label: 'None',
      },
      FIRST_CALL: {
        type: ValueTypes.Numeric,
        computationMode: ComputationMode.MODIFIABLE,
        value: 3,
      },
      DENOMINATION: {
        type: ValueTypes.Numeric,
        computationMode: ComputationMode.MODIFIABLE,
        value: 1000,
      },
      NOTIONAL: {
        type: ValueTypes.Numeric,
        computationMode: ComputationMode.MODIFIABLE,
        value: 500000,
      },
      BASKET: {
        type: ValueTypes.WeightedBasket,
        underliers: [],
      },
      INITIAL_FIXING_DATE: {
        type: ValueTypes.LocalDate,
        computationMode: ComputationMode.MODIFIABLE,
        value: '2022-09-09',
      },
      TENOR: {
        type: ValueTypes.Numeric,
        computationMode: ComputationMode.MODIFIABLE,
        value: 12,
      },
      COUPON_P_A: {
        type: ValueTypes.Numeric,
        computationMode: ComputationMode.SOLVED,
        value: null,
      },
      SOLVE_FOR: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'COUPON_P_A',
        label: 'Coupon p.a',
      },
      COUPON_TYPE: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'CONDITIONAL',
        label: 'Conditional',
      },
      AUTOCALL_TRIGGER_LEVEL: {
        type: ValueTypes.Numeric,
        computationMode: ComputationMode.MODIFIABLE,
        value: 100,
      },
      COUPON_TRIGGER_LEVEL: {
        type: ValueTypes.Numeric,
        computationMode: ComputationMode.MODIFIABLE,
        value: 100,
      },
      TARGET_MARKET: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'RETAIL',
        label: 'retail',
      },
      SETTLEMENT_TYPE: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'CASH',
        label: 'Cash',
      },
      LISTING: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'NONE',
        label: 'None',
      },
      FINAL_FIXING_DATE: {
        type: ValueTypes.LocalDate,
        computationMode: ComputationMode.COMPUTED,
        value: '2023-09-09',
      },
      OFFERING: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'PRIVATE_PLACEMENT',
        label: 'private placement',
      },
      STRIKE_LEVEL: {
        type: ValueTypes.Numeric,
        computationMode: ComputationMode.MODIFIABLE,
        value: 100,
      },
      COUPON_MEMORY: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'YES',
        label: 'Yes',
      },
      ATC_STEP_DIRECTION: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'NONE',
        label: 'None',
      },
      CALL_TYPE: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'AUTO',
        label: 'Auto',
      },
      ISSUE_PRICE: {
        type: ValueTypes.Numeric,
        computationMode: ComputationMode.MODIFIABLE,
        value: 100,
      },
      LAST_CALL: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'YES',
        label: 'Yes',
      },
      FIXING: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'CLOSE',
        label: 'Close',
      },
      REDEMPTION_DATE: {
        type: ValueTypes.LocalDate,
        computationMode: ComputationMode.COMPUTED,
        value: '2023-09-14',
      },
      DATE_OFFSET: {
        type: ValueTypes.Numeric,
        computationMode: ComputationMode.MODIFIABLE,
        value: 5,
      },
      BARRIER_LEVEL: {
        type: ValueTypes.Numeric,
        computationMode: ComputationMode.MODIFIABLE,
        value: 80,
      },
      COUPON_OBSERVATION_FREQ: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: '3m',
        label: 'Quarterly',
      },
      CALL_FREQ: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: '3m',
        label: 'Quarterly',
      },
      CURRENCY: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'CHF',
        label: 'Swiss Franc',
      },
      ISSUE_DATE: {
        type: ValueTypes.LocalDate,
        computationMode: ComputationMode.COMPUTED,
        value: '2022-09-14',
      },
      COUPON_SETTLEMENT_FREQ: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: '3m',
        label: 'Quarterly',
      },
      DOWNSIZE_GEARING: {
        type: ValueTypes.Enum,
        computationMode: ComputationMode.MODIFIABLE,
        id: 'NO',
        label: 'No',
      },
      REOFFER: {
        type: ValueTypes.Numeric,
        computationMode: ComputationMode.MODIFIABLE,
        value: 99,
      },
    },
  },
  productLayout: {
    sections: [
      {
        label: 'Product Selections',
        fieldGroups: [
          {
            label: null,
            fields: [
              { paramName: 'PRODUCT_TYPE', label: 'Product' },
              { paramName: 'PROGRAM_TYPE', label: 'Program' },
              { paramName: 'BASKET', label: '' },
              { paramName: 'BASKET_WEIGHTING', label: 'Basket Weighting' },
              { paramName: 'DATE_OFFSET', label: 'Date Offset' },
            ],
          },
          {
            label: null,
            fields: [
              { paramName: 'TENOR', label: 'Tenor (m)' },
              {
                paramName: 'INITIAL_FIXING_DATE',
                label: 'Initial Fixing Date',
              },
              { paramName: 'CURRENCY', label: 'Currency' },
              { paramName: 'NOTIONAL', label: 'Notional Amount' },
              { paramName: 'SOLVE_FOR', label: 'Solve For' },
              { paramName: 'REOFFER', label: 'Reoffer' },
              { paramName: 'SETTLEMENT_TYPE', label: 'Settlement Type' },
              { paramName: 'FIXING', label: 'Fixing' },
              { paramName: 'FEE', label: 'Fee' },
            ],
          },
        ],
      },
      {
        label: 'Payoff at Maturity',
        fieldGroups: [
          {
            label: null,
            fields: [
              { paramName: 'BARRIER_TYPE', label: 'Barrier Type' },
              { paramName: 'BARRIER_LEVEL', label: 'Barrier Level' },
              { paramName: 'STRIKE_LEVEL', label: 'Strike Level' },
              { paramName: 'DOWNSIZE_GEARING', label: 'Downside Gearing' },
            ],
          },
        ],
      },
      {
        label: 'Coupon',
        fieldGroups: [
          {
            label: null,
            fields: [
              { paramName: 'COUPON_P_A', label: 'Coupon p.a.' },
              { paramName: 'COUPON_TYPE', label: 'Coupon Type' },
              {
                paramName: 'COUPON_TRIGGER_LEVEL',
                label: 'Coupon Trigger Level',
              },
              { paramName: 'COUPON_MEMORY', label: 'Coupon Memory' },
              {
                paramName: 'COUPON_OBSERVATION_FREQ',
                label: 'Coupon Obs. Freq.',
              },
              {
                paramName: 'COUPON_SETTLEMENT_FREQ',
                label: 'Coupon Settl. Freq.',
              },
            ],
          },
        ],
      },
      {
        label: 'Early Redemption',
        fieldGroups: [
          {
            label: null,
            fields: [
              { paramName: 'CALL_TYPE', label: 'Call Type' },
              { paramName: 'CALL_FREQ', label: 'Call Frequency' },
              { paramName: 'FIRST_CALL', label: 'First Call (m)' },
              { paramName: 'LAST_CALL', label: 'Last Call' },
              {
                paramName: 'AUTOCALL_TRIGGER_LEVEL',
                label: 'Autocall Trigger Level',
              },
            ],
          },
        ],
      },
      {
        label: 'Distribution Details',
        fieldGroups: [
          {
            label: null,
            fields: [
              { paramName: 'ISSUE_PRICE', label: 'Issue Price' },
              { paramName: 'ISSUE_SIZE', label: 'Issue Size' },
              { paramName: 'DENOMINATION', label: 'Denomination' },
              {
                paramName: 'COUNTRIES_OF_DISTRIBUTION',
                label: 'Countries of Distribution',
              },
              { paramName: 'TARGET_MARKET', label: 'Target Market' },
              { paramName: 'OFFERING', label: 'Offering' },
              { paramName: 'LISTING', label: 'Listing' },
              { paramName: 'QUOTING_TYPE', label: 'Quoting Type' },
            ],
          },
        ],
      },
      {
        label: 'Schedule',
        fieldGroups: [
          {
            label: 'Dates',
            fields: [
              { paramName: 'ISSUE_DATE', label: 'Issue Date' },
              { paramName: 'FINAL_FIXING_DATE', label: 'Final Fixing Date' },
              { paramName: 'REDEMPTION_DATE', label: 'Redemption Date' },
            ],
          },
          {
            label: 'ATC Triggers',
            fields: [
              { paramName: 'ATC_STEP_DIRECTION', label: 'ATC Step Direction' },
            ],
          },
          {
            label: 'Coupon Triggers',
            fields: [
              {
                paramName: 'COUPON_STEP_DIRECTION',
                label: 'Coupon Step Direction',
              },
            ],
          },
        ],
      },
    ],
  },
  productValidationErrors: {},
  constraints: {
    PROGRAM_TYPE: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'DEFAULT',
          label: 'Default',
        },
      ],
    },
    BARRIER_TYPE: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'EUROPEAN',
          label: 'European',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'LOWSTRIKE',
          label: 'Low Strike',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'DAILY_ON_CLOSE',
          label: 'Daily on Close',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'AMERICAN',
          label: 'American',
        },
      ],
    },
    QUOTING_TYPE: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'CLEAN',
          label: 'Clean',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'DIRTY',
          label: 'Dirty',
        },
      ],
    },
    PRODUCT_TYPE: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'BARRIER_REVERSE_CONVERTIBLE',
          label: 'Barrier Reverse Convertible',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'DISCOUNT_CERTIFICATE',
          label: 'Discount Certificate',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'REVERSE_CONVERTIBLE',
          label: 'Reverse Convertible',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'CALLABLE_BRC',
          label: 'Callable BRC',
        },
      ],
    },
    COUNTRIES_OF_DISTRIBUTION: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'PE ',
          label: 'Peru',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'AT ',
          label: 'Austria',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'SE ',
          label: 'Sweden',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'AR ',
          label: 'Argentina',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'PA ',
          label: 'Panama',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'FR ',
          label: 'France',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'IT ',
          label: 'Italy',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'MX ',
          label: 'Mexico',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'CL ',
          label: 'Chile',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'ZA ',
          label: 'South Africa',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'PT ',
          label: 'Portugal',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'CH ',
          label: 'Switzerland',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'PR ',
          label: 'Puerto Rico',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'IL ',
          label: 'Israel',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'NL ',
          label: 'Netherlands',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'GB ',
          label: 'United Kingdom',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'ES ',
          label: 'Spain',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'CO ',
          label: 'Colombia',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'LU ',
          label: 'Luxembourg',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'PY ',
          label: 'Paraguay',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'DK ',
          label: 'Denmark',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'UY ',
          label: 'Uruguay',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'AE ',
          label: 'UAE',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'BE ',
          label: 'Belgium',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'FI ',
          label: 'Finland',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'DE ',
          label: 'Germany',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'NO ',
          label: 'Norway',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'US ',
          label: 'USA',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'EC ',
          label: 'Ecuador',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'IE ',
          label: 'Ireland',
        },
      ],
    },
    ISSUE_SIZE: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.GenericConstraints',
    },
    FEE: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.GenericConstraints',
    },
    BASKET_WEIGHTING: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'CUSTOM',
          label: 'Custom',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'EQUAL',
          label: 'Equal',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'BEST_OF',
          label: 'Best-of',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'WORST_OF',
          label: 'Worst-of',
        },
      ],
    },
    COUPON_STEP_DIRECTION: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'UP',
          label: 'Up',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'NONE',
          label: 'None',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'DOWN',
          label: 'Down',
        },
      ],
    },
    FIRST_CALL: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.GenericConstraints',
    },
    DENOMINATION: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.GenericConstraints',
    },
    NOTIONAL: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.GenericConstraints',
    },
    INITIAL_FIXING_DATE: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.GenericConstraints',
    },
    TENOR: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.GenericConstraints',
    },
    COUPON_P_A: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.GenericConstraints',
    },
    SOLVE_FOR: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'COUPON_P_A',
          label: 'Coupon p.a',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'STRIKE_LEVEL',
          label: 'Strike Level',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'BARRIER_LEVEL',
          label: 'Barrier Level',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'COUPON_TRIGGER_LEVEL',
          label: 'Coupon Trigger Level',
        },
      ],
    },
    COUPON_TYPE: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'CONDITIONAL',
          label: 'Conditional',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'GUARANTEED',
          label: 'Guaranteed',
        },
      ],
    },
    AUTOCALL_TRIGGER_LEVEL: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.GenericConstraints',
    },
    COUPON_TRIGGER_LEVEL: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.GenericConstraints',
    },
    TARGET_MARKET: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'PROFESSIONAL_COUNTERPARTIES',
          label: 'professional counterparties',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'ELIGIBLE_COUNTERPARTIES',
          label: 'eligible counterparties',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'RETAIL',
          label: 'retail',
        },
      ],
    },
    SETTLEMENT_TYPE: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'CASH',
          label: 'Cash',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'PHYSICAL',
          label: 'Physical',
        },
      ],
    },
    LISTING: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'NONE',
          label: 'None',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'SIX',
          label: 'SIX',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'EURONEXT_FRANCE',
          label: 'Euronext France',
        },
      ],
    },
    FINAL_FIXING_DATE: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.GenericConstraints',
    },
    OFFERING: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'PUBLIC_OFFERING',
          label: 'public offering',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'PRIVATE_PLACEMENT',
          label: 'private placement',
        },
      ],
    },
    STRIKE_LEVEL: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.GenericConstraints',
    },
    COUPON_MEMORY: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'YES',
          label: 'Yes',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'NO',
          label: 'No',
        },
      ],
    },
    ATC_STEP_DIRECTION: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'UP',
          label: 'Up',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'NONE',
          label: 'None',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'DOWN',
          label: 'Down',
        },
      ],
    },
    CALL_TYPE: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'AUTO',
          label: 'Auto',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'ISSUER',
          label: 'Issuer',
        },
      ],
    },
    ISSUE_PRICE: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.GenericConstraints',
    },
    LAST_CALL: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'YES',
          label: 'Yes',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'NO',
          label: 'No',
        },
      ],
    },
    FIXING: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'OPEN',
          label: 'Open',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'CLOSE',
          label: 'Close',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'VWAP',
          label: 'VWAP',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'INTRA_DAY',
          label: 'Intraday',
        },
      ],
    },
    REDEMPTION_DATE: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.GenericConstraints',
    },
    DATE_OFFSET: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.GenericConstraints',
    },
    BARRIER_LEVEL: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.GenericConstraints',
    },
    COUPON_OBSERVATION_FREQ: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: '6m',
          label: 'Semi-Annually',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: '1y',
          label: 'Annually',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: '3m',
          label: 'Quarterly',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: '2m',
          label: 'Bi-Monthly',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: '1m',
          label: 'Monthly',
        },
      ],
    },
    CALL_FREQ: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: '6m',
          label: 'Semi-Annually',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: '1y',
          label: 'Annually',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: '3m',
          label: 'Quarterly',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: '2m',
          label: 'Bi-Monthly',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: '1m',
          label: 'Monthly',
        },
      ],
    },
    CURRENCY: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'USD',
          label: 'US Dollar',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'EUR',
          label: 'Euro',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'CHF',
          label: 'Swiss Franc',
        },
      ],
    },
    ISSUE_DATE: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.GenericConstraints',
    },
    COUPON_SETTLEMENT_FREQ: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: '6m',
          label: 'Semi-Annually',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: '1y',
          label: 'Annually',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: '3m',
          label: 'Quarterly',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: '2m',
          label: 'Bi-Monthly',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: '1m',
          label: 'Monthly',
        },
      ],
    },
    DOWNSIZE_GEARING: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.EnumDropdownConstraints',
      availableValues: [
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'YES',
          label: 'Yes',
        },
        {
          type: ValueTypes.Enum,
          computationMode: ComputationMode.MODIFIABLE,
          id: 'NO',
          label: 'No',
        },
      ],
    },
    REOFFER: {
      type: 'com.luma.creationhub2service.api.model.product.params.constraints.GenericConstraints',
    },
  },
  issuers: {
    RBC: { id: 'RBC', canAutoQuoteIndicative: true, canAutoQuoteLive: true },
    'Credit Suisse': {
      id: 'Credit Suisse',
      canAutoQuoteIndicative: false,
      canAutoQuoteLive: false,
    },
    BNP: { id: 'BNP', canAutoQuoteIndicative: true, canAutoQuoteLive: true },
    SocGen: {
      id: 'SocGen',
      canAutoQuoteIndicative: true,
      canAutoQuoteLive: true,
    },
    Barclays: {
      id: 'Barclays',
      canAutoQuoteIndicative: false,
      canAutoQuoteLive: false,
    },
    'Citi Bank': {
      id: 'Citi Bank',
      canAutoQuoteIndicative: true,
      canAutoQuoteLive: true,
    },
    UBS: { id: 'UBS', canAutoQuoteIndicative: true, canAutoQuoteLive: true },
    'Canadian Imperial Bank of Commerce': {
      id: 'Canadian Imperial Bank of Commerce',
      canAutoQuoteIndicative: false,
      canAutoQuoteLive: false,
    },
  },
};
export default initialConfigMock;
