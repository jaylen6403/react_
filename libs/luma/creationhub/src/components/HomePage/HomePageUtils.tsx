import { Link } from 'react-router-dom';
import { Rfq, PricingInProgress } from '@luma-fe-workspace/redux';
import { IdWrapper } from './HomePage.styles';

export enum Permissions {
  indicativeQuoteRequest = 'CAN_CREATE_INDICATIVE_QUOTE_REQUEST',
  liveQuoteRequest = 'CAN_CREATE_LIVE_QUOTE_REQUEST',
  estimateQuoteRequest = 'CAN_CREATE_ESTIMATED_QUOTE_REQUEST',
  manualQuoteRequest = 'CAN_CREATE_MANUAL_QUOTE_REQUEST',
}

export enum UserTypes {
  Issuer = 'Issuer',
  Client = 'Broker Dealer',
}

export enum CreationHubPages {
  PricingView = 'pricing',
  IssuerPricingView = 'issuerpricing',
  NewPricing = 'newpricing',
}

export function canCreatePricing(permissions: Permissions[]) {
  return (
    permissions.includes(Permissions.indicativeQuoteRequest) ||
    permissions.includes(Permissions.liveQuoteRequest) ||
    permissions.includes(Permissions.estimateQuoteRequest) ||
    permissions.includes(Permissions.manualQuoteRequest)
  );
}
