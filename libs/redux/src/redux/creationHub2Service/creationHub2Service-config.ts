import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: './creationHub2Service.json',
  apiFile: './creationHub2ServiceBaseApi.ts',
  apiImport: 'baseApi',
  outputFile: './creationHub2ServiceEndpoints.ts',
  exportName: 'creationHub2ServiceApi',
  hooks: true,
};

export default config;
