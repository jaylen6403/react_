import { lumaPermissionsArray } from '../../../redux/permissionsService/types';

export const mockUiPermissionsResponse = (
  response: string[] = []
): string[] => [...lumaPermissionsArray, ...response];

export const mockEmptyUiPermissionsResponse = (): string[] => [];
