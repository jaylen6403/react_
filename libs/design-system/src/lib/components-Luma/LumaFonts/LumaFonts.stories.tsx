import { Story, Meta } from '@storybook/react';
import { LumaFont } from './LumaFonts';
import { Text, DIMENSION_MAP } from './LumaFonts.style';

export default {
  title: 'Styleguide/Fonts',
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/styleguide/624c74edc63a9e13edc17931/textstyles',
  },
} as Meta;

type LumaFontsType = keyof typeof LumaFont.DEFAULT;
type SizeType = keyof typeof DIMENSION_MAP.fontSizes;
const fonts = Object.keys(LumaFont.DEFAULT);
const sizes = Object.keys(DIMENSION_MAP.fontSizes);

const LumaFonts = ({
  font,
  size,
  sizeName,
}: {
  font: LumaFontsType;
  size: string;
  sizeName: string;
}) => (
  <Text font={font} size={size}>
    Text/{sizeName}/{font}
  </Text>
);

const Template: Story = () => (
  <table>
    <tbody>
      {fonts.map(function (font) {
        return sizes.map(function (size) {
          return (
            <tr key={`${size}-${font}`}>
              <td>
                <LumaFonts
                  font={font as LumaFontsType}
                  size={DIMENSION_MAP.fontSizes[size as SizeType]}
                  sizeName={size}
                />
              </td>
              <td>
                IBMPlexSans, {font}, {DIMENSION_MAP.fontSizes[size as SizeType]}
              </td>
            </tr>
          );
        });
      })}
    </tbody>
  </table>
);
export const Default = Template.bind({});
Default.args = {};
