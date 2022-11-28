import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  // TODO: Use swagger docs when LocalDate issue is resolved
  // schemaFile:
  //   'https://bdev.lumafintech.com/api/secondary-market-service/v2/api-docs',
  schemaFile: './emailService.json',
  apiFile: './emailServiceBaseApi.ts',
  apiImport: 'baseApi',
  outputFile: './emailServiceEndpoints.ts',
  exportName: 'emailServiceApi',
  hooks: true,
};

export default config;
