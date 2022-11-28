import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: './topProductsService.json',
  apiFile: './topProductsServiceBaseApi.ts',
  apiImport: 'baseApi',
  outputFile: './topProductsServiceEndpoints.ts',
  exportName: 'topProductsServiceApi',
  hooks: true,
};

export default config;
