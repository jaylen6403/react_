export function generateAriaDescriptors(id: string) {
  return {
    titleId: `${id}_title`,
    contentId: `${id}_content`,
  };
}

export type ModalSeperatorColor = 'NONE' | 'SELL' | 'BUY';

export interface SearchNameDescriptor {
  name: string;
  placeholder?: string;
  setName: (newSearchName: string) => void;
}
