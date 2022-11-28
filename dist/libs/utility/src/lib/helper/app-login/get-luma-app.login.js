"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAngularLink = exports.getLumaAppLogin = void 0;
const ENVIRONMENT_TO_SUBDOMAIN = {
    dev: 'bdev.',
    qa: 'bqa.',
    uat: 'buat.',
    staging: 'staging.',
    prod: '',
};
const isEnvironment = (env) => new RegExp(`https://(app|(go(-(an|ch|dn|lm|sp))?)).${ENVIRONMENT_TO_SUBDOMAIN[env]}lumafintech.com`).test(window.origin);
const isProduction = () => isEnvironment('prod');
const isStaging = () => isEnvironment('staging');
const isUAT = () => isEnvironment('uat');
const isHigherEnvironment = () => isProduction() || isStaging() || isUAT();
const getLumaAppLogin = () => isHigherEnvironment()
    ? `${window.location.origin.replace('go.', 'app.')}/login`
    : `${(0, exports.getAngularLink)()}/login`;
exports.getLumaAppLogin = getLumaAppLogin;
const getAngularLink = (url) => {
    const formattedUrl = url !== null && url !== void 0 ? url : window.origin;
    return formattedUrl.replace(/go(?:-(an|ch|dn|lm|sp))?(?=\.)/g, (match, teamSubdomain) => (teamSubdomain != null ? teamSubdomain : 'app'));
};
exports.getAngularLink = getAngularLink;
//# sourceMappingURL=get-luma-app.login.js.map