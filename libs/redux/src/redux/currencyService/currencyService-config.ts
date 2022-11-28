import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  // TODO: Use swagger docs when LocalDate issue is resolved
  // schemaFile:
  //   'https://bdev.lumafintech.com/api/secondary-market-service/v2/api-docs',
  schemaFile: './currencyService.json',
  apiFile: './currencyServiceBaseApi.ts',
  apiImport: 'baseApi',
  outputFile: './currencyServiceEndpoints.ts',
  exportName: 'currencyServiceApi',
  hooks: true,
};

export default config;
