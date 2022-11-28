export type Sort = {
  empty?: boolean;
  sorted?: boolean;
  unsorted?: boolean;
};
export type Pageable = {
  offset?: number;
  pageNumber?: number;
  pageSize?: number;
  paged?: boolean;
  sort?: Sort;
  unpaged?: boolean;
};
