import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: './creationHubService.json',
  apiFile: './creationHubServiceBaseApi.ts',
  apiImport: 'baseApi',
  outputFile: './creationHubServiceEndpoints.ts',
  exportName: 'creationHubServiceApi',
  hooks: true,
};

export default config;
