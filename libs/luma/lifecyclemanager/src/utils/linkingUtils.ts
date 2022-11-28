import { isHigherEnvironment } from '@luma-fe-workspace/design-system';

export const createLink = (route: string) => {
  const baseUrl = '//lm.bdev.lumafintech.com';

  const revisedUrl = isHigherEnvironment()
    ? baseUrl.replace('//go.', '//app.')
    : baseUrl.replace('//go.', '//lm.');

  return `${revisedUrl}${route}`;
};

export const createLMUrl = () => createLink('/lifecycle-manager/overview/');

export const createProductDetailsUrl = (cusip: string | undefined) => {
  return cusip
    ? createLink(`/product-details/overview/${cusip}`)
    : createLMUrl();
};
