import { ComponentStory, ComponentMeta } from '@storybook/react';
import { rest } from 'msw';
import { StructuredProducts } from './StructuredProducts';
import {
  portfolioMockData,
  mockCurrencyData,
} from './structuredProductsPortfolioUtils';
import { apiUrl } from '@luma-fe-workspace/utility';

export default {
  title: 'Dashboard/StructuredProducts',
  component: StructuredProducts,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/6260703798a7b4ac58787c42/screen/62619a5283e0acab4c5be17d',
  },
} as ComponentMeta<typeof StructuredProducts>;

const Template: ComponentStory<typeof StructuredProducts> = (args) => (
  <StructuredProducts {...args} />
);

const defaultArgs = {
  pieChartSize: { height: 280, width: 280 },
  screenWidth: window.innerWidth,
  structuredPortfolioData: portfolioMockData,
  structuredPortfolioIsLoading: false,
};

export const Structured = Template.bind({});
Structured.args = { ...defaultArgs };
Structured.parameters = {
  msw: {
    handlers: [
      rest.get(`${apiUrl}/currency-service/currencies`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockCurrencyData));
      }),
    ],
  },
};
