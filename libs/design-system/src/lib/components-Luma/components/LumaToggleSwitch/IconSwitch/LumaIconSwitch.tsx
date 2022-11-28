import {
  IconSwitchContainer,
  IconSwitchItem,
  Input,
  Label,
  Marker,
} from './LumaIconSwitch.style';
import { LumaIcon, IconCode } from '../../LumaIcon';

export interface IconSwitchProps {
  /**
   * defines the icons that will be displayed on the right and left side of the switch
   */
  icons: { left: IconCode; right: IconCode };
  /**
   * defines the icons that will be displayed on the right and left side of the switch
   */
  sizeVariant: 'small' | 'x_small';
  /**
   * if the value is true then the marker is on the right. If false - on the left.
   */
  checked: boolean;
  /**
   * Is switch disabled.
   */
  disabled?: boolean;
  /**
   * Change handler.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LumaIconSwitch = ({
  icons,
  sizeVariant,
  checked,
  disabled = false,
  onChange,
}: IconSwitchProps) => {
  return (
    <IconSwitchContainer disabled={disabled} sizeVariant={sizeVariant}>
      <IconSwitchItem sizeVariant={sizeVariant}>
        <Input
          type="checkbox"
          checked={!checked}
          onChange={onChange}
          disabled={disabled}
          id="checkbox"
        />
        <Label disabled={disabled} htmlFor="checkbox">
          <LumaIcon iconCode={icons.left} type={!checked ? 'solid' : 'light'} />
        </Label>
        <Marker sizeVariant={sizeVariant} disabled={disabled} />
      </IconSwitchItem>
      <IconSwitchItem sizeVariant={sizeVariant}>
        <Label disabled={disabled} htmlFor="checkbox">
          <LumaIcon iconCode={icons.right} type={checked ? 'solid' : 'light'} />
        </Label>
      </IconSwitchItem>
    </IconSwitchContainer>
  );
};
