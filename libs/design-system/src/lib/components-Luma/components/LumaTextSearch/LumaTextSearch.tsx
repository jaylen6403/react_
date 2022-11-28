import { ReactElement, useState, FocusEvent } from 'react';
import { useCombobox } from 'downshift';
import {
  TextSearchContainer,
  InputContainer,
  HiddenInput,
  HelperText,
  SearchIcon,
  DropDownItemWrapper,
  DropItem,
  ClearIcon,
  SIZE_MAP,
} from './LumaTextSearch.style';
import { LumaStatus } from '../LumaStatus';
import { LumaIcon } from '../LumaIcon';
import { LumaDropDownBox } from '../LumaDropdownBox';
import {
  DataItemProps,
  TextSearchItem,
} from '../LumaDropdown/LumaDropDownBasicType';

export interface TextSearchProps<Item> {
  /**Give a unique id for the field */
  id: string;
  /**ClassName is the normal class */
  className?: string;
  /**Error will act when user need to show validation error */
  error?: boolean;
  /**helperText will show a label below the box for showing information or error message */
  helperText?: string;
  /**component will be readonly*/
  readOnly?: boolean;
  /**fullwidth will make the field 100% width  */
  fullWidth?: boolean;
  /**disabled will disable the field
   * @default false
   */
  disabled?: boolean;
  /**size will make the field small, medium or large size
   * @default medium
   */
  sizeVariant?: keyof typeof SIZE_MAP;
  /**act like a placeholder */
  placeholder?: string;
  /**data array for dropdown */
  items: Item[];
  /**action item selection a dropdown */
  handleSelectItem?: (item: Item | null | undefined) => void;
  /**action item on change item */
  handleChange?: (value: string | undefined) => void;
  /**action item on blur*/
  handleBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  /**action to output string */
  itemToString?: (item: DataItemProps | TextSearchItem | null) => string;
  /**Template of the dropdown item */
  renderContent: ReactElement<{ item: Item }>;
  /**Input box aria label */
  inputAriaLabel: string;
  /**button box aria label */
  buttonAriaLabel: string;
  /**variant: this props will change dropdown result
   * Two main format of dropdown result will be:
   * standard:
   * -------------------------
   * -- <option>            --
   * -- <option>            --
   * -------------------------
   * underlier:
   * -------------------------
   * -- xxxxxx | <option>   --
   * -- xxxxxx | <option>   --
   * -------------------------
   * @default standard
   */
  variant?: 'standard' | 'underlier';
  /**ErrorMessage Template */
  errorTemplate?: ReactElement;
  /**Default value that will be shown in Text Search*/
  defaultValue?: string;
}

type RenderContentProps = {
  item?: { label: string; id: string };
  variant?: 'standard' | 'underlier';
};

export const RenderContent = ({ item, variant }: RenderContentProps) => {
  return (
    <DropDownItemWrapper variant={variant}>
      {variant !== 'standard' ? (
        <DropItem variant={variant}>{item?.id}</DropItem>
      ) : null}
      <DropItem variant={variant}>{item?.label}</DropItem>
    </DropDownItemWrapper>
  );
};

export const LumaTextSearch = <Item,>({
  id,
  placeholder = '',
  className,
  error,
  readOnly,
  fullWidth,
  disabled,
  helperText,
  sizeVariant = 'medium',
  items = [],
  handleSelectItem,
  handleChange,
  handleBlur,
  itemToString,
  inputAriaLabel,
  buttonAriaLabel,
  renderContent,
  variant = 'standard',
  defaultValue,
  errorTemplate = (
    <LumaStatus variant="failed" statusBorder={true} ariaLabel="failStatus" />
  ),
  ...rest
}: TextSearchProps<Item>) => {
  const [inputValue, setInputValue] = useState<string | undefined>(
    defaultValue || ''
  );
  const [isFocus, setIsFocus] = useState(false);
  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
    reset,
  } = useCombobox<Item>({
    itemToString,
    inputValue,
    items,
    onInputValueChange: ({ inputValue }) => {
      setInputValue(inputValue);
      handleChange?.(inputValue);
      return;
    },
    onSelectedItemChange({ selectedItem: selectedItemEvent }) {
      handleSelectItem?.(selectedItemEvent);
      reset();
    },
  });
  const inputProps = getInputProps({
    'aria-label': inputAriaLabel,
    'aria-labelledby': '',
  });
  return (
    <TextSearchContainer
      sizeVariant={sizeVariant}
      fullWidth={fullWidth}
      className={className}
      {...getComboboxProps()}
    >
      <InputContainer
        sizeVariant={sizeVariant}
        id={id}
        error={error}
        placeholder={placeholder}
        disabled={disabled}
      >
        <SearchIcon disabled={disabled}>
          <LumaIcon iconCode="magnifying-glass" />
        </SearchIcon>
        <HiddenInput
          value={inputValue}
          placeholder={placeholder}
          onFocus={() => {
            setIsFocus(!isFocus);
          }}
          onBlur={() => {
            setIsFocus(!isFocus);
          }}
          disabled={disabled}
          readOnly={readOnly}
          {...inputProps}
          {...rest}
        />
        {inputValue && !readOnly && (
          <ClearIcon
            type="button"
            aria-label={buttonAriaLabel}
            onClick={() => {
              reset();
            }}
          >
            <LumaIcon iconCode="times" />
          </ClearIcon>
        )}
      </InputContainer>
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
      <LumaDropDownBox
        size={sizeVariant}
        isOpen={isOpen}
        items={items}
        getMenuProps={getMenuProps}
        highlightedIndex={highlightedIndex}
        getItemProps={getItemProps}
        renderComponent={<RenderContent />}
        itemToString={itemToString}
        variant={variant}
        id={id}
        errorTemplate={errorTemplate}
      />
    </TextSearchContainer>
  );
};
