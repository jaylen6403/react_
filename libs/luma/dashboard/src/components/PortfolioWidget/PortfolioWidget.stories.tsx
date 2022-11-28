import { ComponentStory, ComponentMeta } from '@storybook/react';
import { rest } from 'msw';
import { PortfolioWidget } from './PortfolioWidget';
import { ProductTypes } from '../../utils/types';
import { portfolioMockData } from './StructuredProducts/structuredProductsPortfolioUtils';
import { apiUrl } from '@luma-fe-workspace/utility';

export default {
  title: 'Dashboard/PortfolioWidget',
  component: PortfolioWidget,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/6260703798a7b4ac58787c42/screen/62619a5283e0acab4c5be17d',
  },
} as ComponentMeta<typeof PortfolioWidget>;

const Template: ComponentStory<typeof PortfolioWidget> = (args) => (
  <PortfolioWidget
    productsType={ProductTypes.StructuredProducts}
    screenWidth={window.innerWidth}
    applicationTrackerPermission={false}
    creationHubPermission={false}
  />
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
      rest.get(`${apiUrl}/dashboard-service2/portfolios`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(portfolioMockData));
      }),
    ],
  },
};
