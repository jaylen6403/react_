import { LumaIcon } from '../../LumaIcon';
import {
  DropDownIcon,
  DropDownItemWrapper,
  DropDownText,
} from '../LumaDropDown.style';
import { DataItemProps } from '../LumaDropDownBasicType';

interface LumaSingleDropDownOptionProps<DataItemProps> {
  disabled?: boolean;
  isSelected?: boolean;
  item?: DataItemProps;
}

export const LumaSingleDropDownOption = ({
  item = {},
  isSelected,
}: LumaSingleDropDownOptionProps<DataItemProps>) => {
  return (
    <DropDownItemWrapper variant="single">
      <DropDownText
        disabled={item.isDisabled}
        isSelected={isSelected}
        className="DropDownText"
      >
        {item.label}
      </DropDownText>
      {item.iconCode !== undefined && (
        <DropDownIcon isSelected>
          <LumaIcon
            type={isSelected ? 'solid' : 'regular'}
            iconCode={item.iconCode}
          />
        </DropDownIcon>
      )}
    </DropDownItemWrapper>
  );
};
