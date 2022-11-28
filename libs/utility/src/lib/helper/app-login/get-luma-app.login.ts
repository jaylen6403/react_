type EnvOptions = 'dev' | 'qa' | 'uat' | 'staging' | 'prod';
type EnvToSubdomain = { [key in EnvOptions]: string };
const ENVIRONMENT_TO_SUBDOMAIN: EnvToSubdomain = {
  dev: 'bdev.',
  qa: 'bqa.',
  uat: 'buat.',
  staging: 'staging.',
  prod: '',
};
const isEnvironment = (env: EnvOptions): boolean =>
  new RegExp(
    `https://(app|(go(-(an|ch|dn|lm|sp))?)).${ENVIRONMENT_TO_SUBDOMAIN[env]}lumafintech.com`
  ).test(window.origin);
const isProduction = () => isEnvironment('prod');
const isStaging = () => isEnvironment('staging');
const isUAT = () => isEnvironment('uat');

const isHigherEnvironment = () => isProduction() || isStaging() || isUAT();

export const getLumaAppLogin = () =>
  isHigherEnvironment()
    ? `${window.location.origin.replace('go.', 'app.')}/login`
    : `${getAngularLink()}/login`;

export const getAngularLink = (url?: string): string => {
  const formattedUrl = url ?? window.origin;
  return formattedUrl.replace(
    /go(?:-(an|ch|dn|lm|sp))?(?=\.)/g,
    (match, teamSubdomain) => (teamSubdomain != null ? teamSubdomain : 'app')
  );
};
