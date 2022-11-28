import { Dispatch, SetStateAction } from 'react';
import { NavigateHandlerType, RouteChild, Variant } from '../GlobalNav.types';

import {
  MobileButton,
  MobileTabWrapper,
  ActiveButtonHighlight,
} from './MobileTabButton.styles';

interface Props {
  item: RouteChild;
  variantType: Variant;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  handleNavigate: NavigateHandlerType;
  setParentActiveTab: Dispatch<SetStateAction<string | undefined>>;
}

export const MobileTabButton = ({
  variantType,
  item,
  setActiveTab,
  menuOpen,
  setMenuOpen,
  activeTab,
  handleNavigate,
  setParentActiveTab,
}: Props) => {
  return (
    <MobileTabWrapper
      variantType={variantType}
      key={`${new Date().getTime()} ${item.title}`}
    >
      <MobileButton
        onClick={() => {
          setActiveTab(item.title);
          handleNavigate(item);
          setMenuOpen(!menuOpen);
          setParentActiveTab(undefined);
        }}
        variantType={variantType}
        isActive={activeTab === item.title}
      >
        {item.title}
      </MobileButton>
      <ActiveButtonHighlight
        isActive={item.title === activeTab}
        variantType={variantType}
      />
    </MobileTabWrapper>
  );
};
