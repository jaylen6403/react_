import { SetStateAction, Dispatch } from 'react';
import { NavigateHandlerType, NavTabType, Variant } from '../GlobalNav.types';

import { NavButton, NavTabWrapper } from './NavTabButton.styles';

interface Props {
  tab: NavTabType;
  variantType: Variant;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  setParentActiveTab: Dispatch<SetStateAction<string | undefined>>;
  handleNavigate: NavigateHandlerType;
}

export const NavTabButton = ({
  tab,
  variantType,
  activeTab,
  setActiveTab,
  handleNavigate,
  setParentActiveTab,
}: Props) => {
  const { title } = tab;

  const NavTabButtonClick = () => {
    setActiveTab(title);
    handleNavigate(tab);
    setParentActiveTab(undefined);
  };
  return (
    <NavTabWrapper>
      <NavButton
        onClick={NavTabButtonClick}
        variantType={variantType}
        isActive={activeTab === title}
      >
        {title}
      </NavButton>
    </NavTabWrapper>
  );
};
