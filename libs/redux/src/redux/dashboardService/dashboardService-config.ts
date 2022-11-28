import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  // TODO: Use swagger docs when LocalDate issue is resolved
  // schemaFile:
  //   'https://bdev.lumafintech.com/api/secondary-market-service/v2/api-docs',
  schemaFile: './dashboardService.json',
  apiFile: './dashboardServiceBaseApi.ts',
  apiImport: 'baseApi',
  outputFile: './dashboardServiceEndpoints.ts',
  exportName: 'dashboardServiceApi',
  hooks: true,
};

export default config;
