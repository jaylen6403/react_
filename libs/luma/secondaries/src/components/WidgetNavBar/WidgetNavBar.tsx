import { useLocation } from 'react-router-dom';
import { NavLink, Root } from './WidgetNavBar.styles';

export interface NavItemProps {
  title: string;
  link: string;
  linkMatchPath?: string;
}

export const WidgetNavBar = ({ items }: { items: NavItemProps[] }) => {
  const { pathname } = useLocation();

  return (
    <Root aria-label="Widget Switch Bar" role="menubar">
      {items.map(({ title, link, linkMatchPath }) => {
        const isItemActive = pathname.includes(linkMatchPath ?? link);
        return (
          <NavLink active={isItemActive} role="menuitem" to={link} key={link}>
            {title}
          </NavLink>
        );
      })}
    </Root>
  );
};
