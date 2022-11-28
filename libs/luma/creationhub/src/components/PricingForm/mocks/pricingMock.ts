import { PricingState, RfqState, RfqTypeEnum } from '@luma-fe-workspace/redux';

const pricingMock = {
  state: PricingState.InProgress as
    | PricingState.InProgress
    | PricingState.InTrading
    | PricingState.Traded
    | PricingState.Cancelled,
  id: '3e88f26b-9440-43e5-9817-ed7d932bf73c',
  version: '2',
  product: {
    params: {
      PRODUCT_TYPE: {
        type: 'com.luma.creationhub2service.api.model.product.params.EnumValue',
        id: 'Callable',
        label: 'Callable',
      },
      BASKET: {
        type: 'com.luma.creationhub2service.api.model.product.params.basket.WeightedBasket',
        underliers: [
          { underlier: { id: 'MSFT', label: 'Microsoft' }, weight: 0.58 },
          { underlier: { id: 'TSLA', label: 'Tesla' }, weight: 0.42 },
        ],
      },
      PROGRAM_TYPE: {
        type: 'com.luma.creationhub2service.api.model.product.params.EnumValue',
        id: 'Default',
        label: 'Default',
      },
      FIXING_DATE: {
        type: 'com.luma.creationhub2service.api.model.product.params.LocalDateValue',
        value: '2022-06-07',
      },
      STRIKE_LEVEL: {
        type: 'com.luma.creationhub2service.api.model.product.params.NumericValue',
        value: 100,
      },
      BARRIER_TYPE: {
        type: 'com.luma.creationhub2service.api.model.product.params.EnumValue',
        id: 'European',
        label: 'European',
      },
      BARRIER_LEVEL: {
        type: 'com.luma.creationhub2service.api.model.product.params.NumericValue',
        value: 80,
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
            ],
          },
          {
            label: null,
            fields: [
              { paramName: 'FIXING_DATE', label: 'Initial Fixing Date' },
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
            ],
          },
        ],
      },
    ],
  },
  rfqs: {
    'edc3ea4b-6030-4486-a1a5-a7bc306ae546': {
      state: RfqState.QUOTE_REQUESTED,
      type: RfqTypeEnum.INDICATIVE,
      id: 'edc3ea4b-6030-4486-a1a5-a7bc306ae546',
      pricingId: '3e88f26b-9440-43e5-9817-ed7d932bf73c',
      issuer: 'BNP',
      version: '2',
      externalId: 'abcdefgh',
      product: {
        params: {
          PRODUCT_TYPE: {
            type: 'com.luma.creationhub2service.api.model.product.params.EnumValue',
            id: 'Callable',
            label: 'Callable',
          },
          BASKET: {
            type: 'com.luma.creationhub2service.api.model.product.params.basket.WeightedBasket',
            underliers: [
              { underlier: { id: 'MSFT', label: 'Microsoft' }, weight: 0.58 },
              { underlier: { id: 'TSLA', label: 'Tesla' }, weight: 0.42 },
            ],
          },
          PROGRAM_TYPE: {
            type: 'com.luma.creationhub2service.api.model.product.params.EnumValue',
            id: 'Default',
            label: 'Default',
          },
          FIXING_DATE: {
            type: 'com.luma.creationhub2service.api.model.product.params.LocalDateValue',
            value: '2022-06-07',
          },
          STRIKE_LEVEL: {
            type: 'com.luma.creationhub2service.api.model.product.params.NumericValue',
            value: 100,
          },
          BARRIER_TYPE: {
            type: 'com.luma.creationhub2service.api.model.product.params.EnumValue',
            id: 'European',
            label: 'European',
          },
          BARRIER_LEVEL: {
            type: 'com.luma.creationhub2service.api.model.product.params.NumericValue',
            value: 80,
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
                  ],
                },
                {
                  label: null,
                  fields: [
                    { paramName: 'FIXING_DATE', label: 'Initial Fixing Date' },
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
                  ],
                },
              ],
            },
          ],
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
                ],
              },
              {
                label: null,
                fields: [
                  { paramName: 'FIXING_DATE', label: 'Initial Fixing Date' },
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
                ],
              },
            ],
          },
        ],
      },
    },
    'f9ada5e5-64d9-4124-83ce-11b3c109c627': {
      state: 'QUOTE_REQUESTED',
      id: 'f9ada5e5-64d9-4124-83ce-11b3c109c627',
      pricingId: '3e88f26b-9440-43e5-9817-ed7d932bf73c',
      issuer: 'RBC',
      product: {
        params: {
          PRODUCT_TYPE: {
            type: 'com.luma.creationhub2service.api.model.product.params.EnumValue',
            id: 'Callable',
            label: 'Callable',
          },
          BASKET: {
            type: 'com.luma.creationhub2service.api.model.product.params.basket.WeightedBasket',
            underliers: [
              { underlier: { id: 'MSFT', label: 'Microsoft' }, weight: 0.58 },
              { underlier: { id: 'TSLA', label: 'Tesla' }, weight: 0.42 },
            ],
          },
          PROGRAM_TYPE: {
            type: 'com.luma.creationhub2service.api.model.product.params.EnumValue',
            id: 'Default',
            label: 'Default',
          },
          FIXING_DATE: {
            type: 'com.luma.creationhub2service.api.model.product.params.LocalDateValue',
            value: '2022-06-07',
          },
          STRIKE_LEVEL: {
            type: 'com.luma.creationhub2service.api.model.product.params.NumericValue',
            value: 100,
          },
          BARRIER_TYPE: {
            type: 'com.luma.creationhub2service.api.model.product.params.EnumValue',
            id: 'European',
            label: 'European',
          },
          BARRIER_LEVEL: {
            type: 'com.luma.creationhub2service.api.model.product.params.NumericValue',
            value: 80,
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
                  ],
                },
                {
                  label: null,
                  fields: [
                    { paramName: 'FIXING_DATE', label: 'Initial Fixing Date' },
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
                  ],
                },
              ],
            },
          ],
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
                ],
              },
              {
                label: null,
                fields: [
                  { paramName: 'FIXING_DATE', label: 'Initial Fixing Date' },
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
                ],
              },
            ],
          },
        ],
      },
    },
    'b80388c5-1c10-4ea3-a9ba-7228c989ff14': {
      state: 'QUOTE_REQUESTED',
      id: 'b80388c5-1c10-4ea3-a9ba-7228c989ff14',
      pricingId: '3e88f26b-9440-43e5-9817-ed7d932bf73c',
      issuer: 'Credit Suisse',
      product: {
        params: {
          PRODUCT_TYPE: {
            type: 'com.luma.creationhub2service.api.model.product.params.EnumValue',
            id: 'Callable',
            label: 'Callable',
          },
          BASKET: {
            type: 'com.luma.creationhub2service.api.model.product.params.basket.WeightedBasket',
            underliers: [
              { underlier: { id: 'MSFT', label: 'Microsoft' }, weight: 0.58 },
              { underlier: { id: 'TSLA', label: 'Tesla' }, weight: 0.42 },
            ],
          },
          PROGRAM_TYPE: {
            type: 'com.luma.creationhub2service.api.model.product.params.EnumValue',
            id: 'Default',
            label: 'Default',
          },
          FIXING_DATE: {
            type: 'com.luma.creationhub2service.api.model.product.params.LocalDateValue',
            value: '2022-06-07',
          },
          STRIKE_LEVEL: {
            type: 'com.luma.creationhub2service.api.model.product.params.NumericValue',
            value: 100,
          },
          BARRIER_TYPE: {
            type: 'com.luma.creationhub2service.api.model.product.params.EnumValue',
            id: 'European',
            label: 'European',
          },
          BARRIER_LEVEL: {
            type: 'com.luma.creationhub2service.api.model.product.params.NumericValue',
            value: 80,
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
                  ],
                },
                {
                  label: null,
                  fields: [
                    { paramName: 'FIXING_DATE', label: 'Initial Fixing Date' },
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
                  ],
                },
              ],
            },
          ],
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
                ],
              },
              {
                label: null,
                fields: [
                  { paramName: 'FIXING_DATE', label: 'Initial Fixing Date' },
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
                ],
              },
            ],
          },
        ],
      },
    },
  },
};

export default pricingMock;
