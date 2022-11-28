import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: './userService.json',
  apiFile: './userServiceBaseApi.ts',
  apiImport: 'baseApi',
  outputFile: './userServiceEndpoints.ts',
  exportName: 'userServiceApi',
  hooks: true,
};

export default config;
