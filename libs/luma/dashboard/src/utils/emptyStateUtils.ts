import { createLink, createNewRequestUrl, requestHistory } from './links';
export enum EmptyStates {
  AnnuitiesPortfolio = 'AnnuitiesPortfolio',
  SPSPortfolio = 'SPSPortfolio',
  CreationHub = 'CreationHub',
  ApplicationTracker = 'ApplicationTracker',
  CreationHubIssuer = 'CreationHubIssuer',
}

export const emptyStateOptions = {
  AnnuitiesPortfolio: {
    mainText: 'You currently have no live products in your portfolio',
    cardTitle: 'Annuities Portfolio',
    link: createLink('/product-marketplace/annuity-products'),
    subText: 'View new products',
    linkText: 'Product Marketplace',
  },
  SPSPortfolio: {
    mainText: 'You currently have no live products in your portfolio',
    cardTitle: 'Structured Products Portfolio',
    link: createLink('/product-marketplace/structured-products'),
    subText: 'View new products',
    linkText: 'Product Marketplace',
  },
  CreationHub: {
    mainText: 'You have no templates',
    cardTitle: 'Creation Templates',
    link: 'link in empty state component',
    subText: 'Access',
    linkText: 'Creation Hub.',
  },
  CreationHubIssuer: {
    mainText: 'You have no templates',
    cardTitle: 'Creation Templates',
    link: 'link in empty state component',
    subText: 'Access',
    linkText: 'Request History.',
  },
  ApplicationTracker: {
    mainText: 'You have no active applications',
    cardTitle: 'Application Tracker',
    link: '',
    subText: '',
    linkText: '',
  },
};

export const generateLink = (emptyStateType: EmptyStates) => {
  if (emptyStateType === EmptyStates.CreationHub) {
    createNewRequestUrl();
    return;
  } else if (emptyStateType === EmptyStates.CreationHubIssuer) {
    requestHistory();
    return;
  } else {
    window.location.href = emptyStateOptions[emptyStateType].link;
    return;
  }
};
