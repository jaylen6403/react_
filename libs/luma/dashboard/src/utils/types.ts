export enum ProductTypes {
  Annuities = 'Annuities',
  StructuredProducts = 'Structured Products',
}

export type ProductType =
  | ProductTypes.Annuities
  | ProductTypes.StructuredProducts;
