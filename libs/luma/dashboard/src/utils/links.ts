import { getColdFusionBaseUrl } from '@luma-fe-workspace/design-system';
import { getAngularLink } from '@luma-fe-workspace/utility';
import { fetchCstAndNavigate } from '@luma-fe-workspace/redux';

export const isProduction = () =>
  window.origin.includes('https://go.lumafintech.com');
export const isStaging = () =>
  window.origin.includes('staging.lumafintech.com');
export const isUAT = () => window.origin.includes('buat.lumafintech.com');
export const isHigherEnvironment = () =>
  isProduction() || isStaging() || isUAT();

export const createLink = (route: string, CreationHubRequest?: boolean) => {
  // TODO - Make a env variable
  let baseUrl = window.origin.replace(
    'http://localhost:4200',
    `//lm.bdev.lumafintech.com`
  );

  if (CreationHubRequest) {
    baseUrl = getColdFusionBaseUrl();
  }

  const revisedUrl = isHigherEnvironment()
    ? baseUrl.replace('//go.', `//app.`)
    : getAngularLink(baseUrl);

  return `${revisedUrl}${route}`;
};

export const createLMUrl = () => createLink('/lifecycle-manager/overview/');

export const createProductDetailsUrl = (cusip: string | undefined) => {
  return cusip
    ? createLink(`/product-details/overview/${cusip}`)
    : createLMUrl();
};

export const createNewRequestUrl = () =>
  fetchCstAndNavigate((cstToken: string | undefined) =>
    createLink(`/cdfg/WebPages/newRequestCreation.cfm?cst=${cstToken}`, true)
  );
export const requestHistory = () =>
  fetchCstAndNavigate((cstToken: string | undefined) =>
    createLink(
      `/cdfg/WebPages/home.cfm?cst=${cstToken}&section=ProductCreation`,
      true
    )
  );
export const viewAllTemplates = () =>
  fetchCstAndNavigate((cstToken: string | undefined) =>
    createLink(`/cdfg/WebPages/templateView.cfm?cst=${cstToken}`, true)
  );
export const viewAllAnnuities = () =>
  createLink(`/product-marketplace/annuity-product-orders`);
export const viewAnnuityExpanded = (reference: string | undefined) => {
  return () =>
    (window.location.href = createLink(
      `/product-marketplace/annuity-product-orders?reference=${reference}`
    ));
};
export const viewTemplate =
  (templateId: string | undefined, templateName: string | undefined) => () => {
    fetchCstAndNavigate((cstToken: string) =>
      createLink(
        `/cdfg/WebPages/newRequestCreation.cfm?cloneRequestId=${templateId}&template=true&templatename=${templateName}&cst=${cstToken}`,
        true
      )
    );
  };

export const createAnnuitiesLink = () =>
  createLink('/lifecycle-manager/annuities');

export const createProductMarketplaceLink = () =>
  createLink('/product-marketplace/structured-products');

export const createPolicyDetailsUrl = (policyNumber: string | undefined) => {
  return policyNumber
    ? createLink(`/annuity-policy-details/overview/${policyNumber}`)
    : createAnnuitiesLink();
};
