import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  // TODO: Use swagger docs when LocalDate issue is resolved
  // schemaFile:
  //   'https://bdev.lumafintech.com/api/secondary-market-service/v2/api-docs',
  schemaFile: './secondariesService.json',
  apiFile: './secondariesServiceBaseApi.ts',
  apiImport: 'baseApi',
  outputFile: './secondariesServiceEndpoints.ts',
  exportName: 'secondariesServiceApi',
  hooks: true,
};

export default config;
