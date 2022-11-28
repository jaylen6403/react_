import { ChangeEvent, FocusEvent, forwardRef, ReactNode, Ref } from 'react';
import {
  TextEntryContainer,
  TextEntryField,
  Input,
  TextEntryMockContainer,
  TextEntryMockLabel,
  TextEntryMockLabelContainer,
  TextEntryHelper,
  IconInsideTextEntry,
} from './LumaTextEntry.styles';

const enum VariantEnum {
  free = 'free',
  label = 'label',
}

export interface TextEntryProps {
  /**a unique key for the field */
  id?: string;
  /**which act as placeholder initially when type anything it will act as label of the textbox */
  label?: string;
  /**htmlForwhich will help label will target for  */
  htmlFor?: string;
  /**Type of the field*/
  type?: string;
  /**it will be the value enter*/
  value?: string;
  /* defaultValue: default value will be adding usin this prop */
  defaultValue?: string;
  /* onChange action */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /**onBlur action*/
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  /* onFocus action */
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  /* ClassName is the normal class*/
  className?: string;
  /**Error will act when user need to show validation error*/
  error?: boolean;
  /**helpr will show below the input field*/
  helperText?: string;
  /**readonly : cannot Enter or fill value*/
  readOnly?: boolean;
  /**fullwidth will make the field 100% width*/
  fullWidth?: boolean;
  /**disabled will disable the field
   * @default false
   */
  disabled?: boolean;
  /**size will make the field small, medium or large size
   *@default medium*/
  sizeVariant?: 'small' | 'medium' | 'large';
  /* The icon that will be displayed on the right in Text Entry */
  icon?: ReactNode;
  /* The icon that will be displayed on the right in Text Entry */
  variant?: keyof typeof VariantEnum;
  /* Specifies whether input is used by dropdown. */
  useByDropdown?: boolean;
  /* A regular expression for allowed entry format. */
  pattern?: string;
}

export const LumaTextEntry = forwardRef<HTMLInputElement, TextEntryProps>(
  function LumaTextEntry(
    componentProps: TextEntryProps,
    forwardedRef: Ref<HTMLInputElement>
  ) {
    const {
      id,
      label,
      type,
      className,
      value,
      onChange,
      onBlur,
      fullWidth,
      helperText,
      error = false,
      disabled = false,
      htmlFor,
      sizeVariant = 'medium',
      readOnly = false,
      icon,
      variant = VariantEnum.label,
      useByDropdown = false,
      ...rest
    } = componentProps;

    return (
      <TextEntryContainer fullWidth={fullWidth} disabled={disabled}>
        <TextEntryField
          sizeVariant={sizeVariant}
          disabled={disabled}
          className="text-entry--outlined"
          error={error}
        >
          <Input
            ref={forwardedRef}
            id={id}
            type={type}
            value={value}
            className={className}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            readOnly={readOnly}
            sizeVariant={sizeVariant}
            variant={variant}
            placeholder={variant === VariantEnum.free ? label : ''}
            useByDropdown={useByDropdown}
            {...rest}
          />
          {icon !== undefined && (
            <IconInsideTextEntry tabIndex={-1} disabled={disabled}>
              {icon}
            </IconInsideTextEntry>
          )}
          <TextEntryMockContainer className="TextEntryMockContainer--label">
            <TextEntryMockLabelContainer
              sizeVariant={sizeVariant}
              className={`${
                value ? 'TextEntryMockLabel--focused' : ''
              } TextEntryMockLabelContainer`}
            >
              {variant === VariantEnum.label && (
                <TextEntryMockLabel
                  htmlFor={htmlFor}
                  className="TextEntryMockLabel"
                >
                  {label}
                </TextEntryMockLabel>
              )}
            </TextEntryMockLabelContainer>
          </TextEntryMockContainer>
        </TextEntryField>
        {helperText && (
          <TextEntryHelper
            className={`${
              error ? 'TextEntryHelper--error' : ''
            } TextEntryHelper`}
          >
            {helperText}
          </TextEntryHelper>
        )}
      </TextEntryContainer>
    );
  }
);

export default LumaTextEntry;
