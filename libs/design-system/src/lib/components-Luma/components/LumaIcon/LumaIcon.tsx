import type { CSSProperties, MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { findIconDefinition, icon } from '@fortawesome/fontawesome-svg-core';
export type IconCode = IconName;

function createConstrainedIdFn<T>(): <Value extends T>(value: Value) => Value {
  return (value) => value;
}

const iconTypesDictionary = createConstrainedIdFn<Record<string, IconPrefix>>()(
  {
    solid: 'fas',
    regular: 'far',
    light: 'fal',
    duotone: 'fad',
  }
);

export interface IconProps {
  /**
   * Class name for the top level svg element.
   */
  className?: string;
  /**
   * Icon code corresponding to an SVG.
   */
  iconCode: IconCode;
  /**
   * Rotate icon in degrees.
   */
  rotate?: number;
  /**
   * CSS properties.
   */
  style?: CSSProperties;
  /**
   * Icon visual type.
   */
  type?: keyof typeof iconTypesDictionary;
  /**
   * Specifies onClick action.
   */
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export const LumaIcon = ({
  className,
  iconCode,
  type = 'light',
  style,
  rotate,
  onClick,
}: IconProps) => {
  const image = findIconDefinition({
    prefix: iconTypesDictionary[type],
    iconName: iconCode,
  });

  return (
    <FontAwesomeIcon
      className={className}
      icon={icon(image)}
      style={style}
      transform={rotate ? { rotate } : undefined}
      onClick={onClick}
    />
  );
};
