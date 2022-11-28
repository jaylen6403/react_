import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  // TODO: Use swagger docs when LocalDate issue is resolved
  // schemaFile:
  //   'https://bdev.lumafintech.com/api/secondary-market-service/v2/api-docs',
  schemaFile: './productService.json',
  apiFile: './productServiceBaseApi.ts',
  apiImport: 'baseApi',
  outputFile: './productServiceEndpoints.ts',
  exportName: 'productServiceApi',
  hooks: true,
};

export default config;
