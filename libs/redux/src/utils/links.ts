enum environments {
  localhost = 'localhost',
  bdev = 'bdev',
  bqa = 'bqa',
  buat = 'buat',
  staging = 'staging',
  prod = 'prod',
}

export const envCheck = () => {
  if (window.origin.includes('localhost')) return environments.localhost;
  if (window.origin.includes('bdev.lumafintech.com')) return environments.bdev;
  if (window.origin.includes('bqa.lumafintech.com')) return environments.bqa;
  if (window.origin.includes('buat.lumafintech.com')) return environments.buat;
  if (window.origin.includes('staging.lumafintech.com'))
    return environments.staging;
  if (window.origin.includes('go.lumafintech.com')) return environments.prod;
  return environments.localhost;
};

export const baseUrl = (envCheck: environments) => {
  switch (envCheck) {
    case 'localhost':
      return `https://go.bdev.lumafintech.com/`;
    case 'bdev':
      return `https://go.bdev.lumafintech.com/`;
    case 'bqa':
      return `https://go.bqa.lumafintech.com/`;
    case 'buat':
      return `https://go.buat.lumafintech.com/`;
    case 'staging':
      return `https://go.staging.lumafintech.com/`;
    case 'prod':
      return `https://go.lumafintech.com/`;
    default:
      return `https://go.bdev.lumafintech.com/`;
  }
};
