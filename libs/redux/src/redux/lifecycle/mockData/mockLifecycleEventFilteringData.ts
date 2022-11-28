import { EventFilters } from '../types';

export const mockEventFiltering: EventFilters = {
  portfolioAttributes: {
    country: ['USA', 'Brazil', 'Germany', 'China'],
    region: ['South', 'West', 'North', 'East'],
    office: ['Northwest', 'Southwest', 'Northeast', 'Southeast'],
    financialAdvisor: ['John', 'Paul', 'George', 'Ringo'],
    representative: ['John', 'Paul', 'George', 'Ringo'],
    beneficiary: ['John', 'Paul', 'George', 'Ringo'],
    accounts: ['34656', '34934', '24356', '13356'],
  },
  productAttributes: {
    currency: ['USD'],
    structureType: [
      'AutoCap CD',
      'Callable',
      'Auto Callable',
      'Crypto Autocall',
    ],
    eventType: ['CALL', 'COUPON', 'MATURITY'],
    eventStatus: ['Active', 'Inactive'],
    eventProximity: ['Above', 'Below', 'No Proximity'],
    issuer: [
      'Lloyds Bank',
      'Morgan Stanley',
      'General Electric',
      'Royal Bank of Scotland',
      'HSBC',
      'UBS',
      'Jefferies Group LLC',
    ],
  },
};
