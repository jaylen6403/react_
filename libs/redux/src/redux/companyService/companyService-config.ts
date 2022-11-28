import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  // TODO: Use swagger docs when LocalDate issue is resolved
  // schemaFile:
  //   'https://bdev.lumafintech.com/api/company/v2/api-docs',
  schemaFile: './companyService.json',
  apiFile: './companyServiceBaseApi.ts',
  apiImport: 'baseApi',
  outputFile: './companyServiceEndpoints.ts',
  exportName: 'companyProductServiceApi',
  hooks: true,
  filterEndpoints: [/whitelabelinfo/],
  //NOTE: this filter did not only import white label endpoint, i removed all unneeded enpoints, this is to let other developers know that the only endpoint here is white label but it was manually filtered
};

export default config;
