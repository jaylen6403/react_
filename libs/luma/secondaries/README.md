# luma-secondaries

The Luma secondary market platform.

[Project Board](https://navianexchange.atlassian.net/jira/software/projects/SEC/boards/130)

## Running unit tests

Run `nx test luma-secondaries` to execute the unit tests via [Jest](https://jestjs.io).

## Mock Data

Mock data for different data types can be found in the utils folder. The utils that are functions require a userName to be passed as an arguement since these objects have different UI states dependent on who is the liquidity provider and who is the liquidity taker. The mock RFQ and order data should be used to replace the initial order and RFQ responses in `luma-secondaries.tsx`.

1.  Mock order data can be found in `getMockOrderData`
2.  Mock RFQ data can be found in `getMockRFQData`
3.  Mock product data can be found in `mockProductData`
