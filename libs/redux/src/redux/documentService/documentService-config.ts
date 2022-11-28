import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: './documentService.json', //NOTE: documentService.json is modified and reduced for SEC team's use case. All unused endpoints were removed due to error when generating endpoints file.
  apiFile: './documentServiceBaseApi.ts',
  apiImport: 'baseApi',
  outputFile: './documentServiceEndpoints.ts',
  exportName: 'documentServiceApi',
  hooks: true,
};

export default config;
