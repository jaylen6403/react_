import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: './preferenceService.json',
  apiFile: './preferenceServiceBaseApi.ts',
  apiImport: 'baseApi',
  outputFile: './preferenceServiceEndpoints.ts',
  exportName: 'preferenceServiceApi',
  hooks: true,
};

export default config;
