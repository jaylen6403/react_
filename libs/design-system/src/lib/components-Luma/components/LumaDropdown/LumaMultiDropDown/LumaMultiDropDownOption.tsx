import { LumaIcon } from '../../LumaIcon';
import { DataItemProps } from '../LumaDropDownBasicType';
import {
  DropDownItemWrapper,
  DropDownText,
  StyledCheckbox,
} from '../LumaDropDown.style';

interface LumaMultiDropDownOptionProps {
  selectedItems?: DataItemProps[];
  disabled?: boolean;
  item?: DataItemProps;
}

export const LumaMultiDropDownOption = ({
  selectedItems = [],
  item = {},
  disabled,
}: LumaMultiDropDownOptionProps) => {
  const isChecked = !!selectedItems.find(({ value }) => value === item.value);
  return (
    <DropDownItemWrapper variant="multi">
      <StyledCheckbox disabled={disabled} isChecked={isChecked}>
        {isChecked && <LumaIcon iconCode="check" />}
      </StyledCheckbox>

      <DropDownText disabled={item.isDisabled} className="DropDownText">
        {item.label}
      </DropDownText>
    </DropDownItemWrapper>
  );
};
