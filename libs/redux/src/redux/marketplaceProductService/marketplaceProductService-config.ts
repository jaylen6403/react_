import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  // TODO: Use swagger docs when LocalDate issue is resolved
  // schemaFile:
  //   'https://bdev.lumafintech.com/api/marketplace-product-service/v2/api-docs',
  schemaFile: './marketplaceProductService.json',
  apiFile: './marketplaceProductServiceBaseApi.ts',
  apiImport: 'baseApi',
  outputFile: './marketplaceProductServiceEndpoints.ts',
  exportName: 'marketplaceProductServiceApi',
  hooks: true,
  filterEndpoints: [/Training/],
};

export default config;
