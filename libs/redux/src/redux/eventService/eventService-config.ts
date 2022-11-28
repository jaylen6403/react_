import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  // TODO: Use swagger docs when LocalDate issue is resolved
  // schemaFile:
  //   'https://bdev.lumafintech.com/api/event-service/v2/api-docs',
  schemaFile: './eventService.json',
  apiFile: './eventServiceBaseApi.ts',
  apiImport: 'baseApi',
  outputFile: './eventServiceEndpoints.ts',
  exportName: 'eventServiceApi',
  hooks: true,
};

export default config;
