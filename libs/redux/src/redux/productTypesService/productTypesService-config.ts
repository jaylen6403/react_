import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: './productTypesService.json',
  apiFile: './productTypesServiceBaseApi.ts',
  apiImport: 'baseApi',
  outputFile: './productTypesServiceEndpoints.ts',
  exportName: 'productTypesServiceApi',
  hooks: true,
};

export default config;
