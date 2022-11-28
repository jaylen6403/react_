import { LumaButton } from '../LumaButton';
import { LumaIcon, IconCode } from '../LumaIcon';
import { TabsContainer, Link, Indicator } from './LumaTabs.styles';

interface FieldValues {
  paramName: string;
  label: string;
  isDisabled?: boolean;
}

const enum VariantEnum {
  buttons = 'buttons',
  links = 'links',
}

export interface TabsProps {
  /**
   * Determines whether the Tabs component is to be composed of buttons or links
   */
  variant: keyof typeof VariantEnum;
  /**
   * Currently selected value.
   */
  activeValue?: string;
  /**
   * List of tabs.
   */
  fieldValues: FieldValues[];
  /**
   * Handler of click which receives paramName of clicked tab.
   */
  onClick: (paramName: string) => void;
  /**
   * Code of the icon to be displayed in buttons.
   */
  buttonIconCode: IconCode;
}

export const LumaTabs = ({
  variant = 'buttons',
  activeValue = '',
  fieldValues,
  onClick,
  buttonIconCode,
}: TabsProps) => {
  return (
    <TabsContainer variant={variant}>
      {fieldValues.map(({ label, paramName, isDisabled }) => {
        const onButtonClick = () => {
          onClick(paramName);
        };
        const isActive = paramName === activeValue;
        if (variant === VariantEnum.links) {
          return (
            <Link
              key={paramName}
              active={isActive}
              disabled={isDisabled ?? false}
              onClick={onButtonClick}
            >
              {label}
              {isActive && <Indicator />}
            </Link>
          );
        } else {
          return (
            <LumaButton
              key={paramName}
              variant={isActive ? 'tabs_active' : 'tabs_inactive'}
              size="tab"
              icon={{
                iconComponent: (
                  <LumaIcon type="solid" iconCode={buttonIconCode} />
                ),
                isOnRight: true,
              }}
              disabled={isDisabled ?? false}
              onClick={onButtonClick}
            >
              {label}
            </LumaButton>
          );
        }
      })}
    </TabsContainer>
  );
};
