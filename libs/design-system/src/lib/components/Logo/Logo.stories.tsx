import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

import { colors } from '../../colors';
import { Logo } from './Logo';
import lumaLogo from '../../assets/logos/lumaLogo.svg';

const LogoContainer = styled.div<{ luma?: boolean }>`
  margin-left: 1.875rem;
  width: 10.625rem;
  height: 2.5rem;
  background-color: ${(props) => (props.luma ? colors.blue : colors.white)};
  overflow: auto;
  display: flex;
  flex: 1 1 0%;
`;
interface Props {
  luma?: boolean;
  imageSource: string;
}
const LogoStory = ({ luma, imageSource }: Props) => {
  return (
    <LogoContainer luma={luma}>
      <Logo imageSource={imageSource} />
    </LogoContainer>
  );
};
export default {
  title: 'Secondaries/Logo',
  component: LogoStory,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/6244c37df5157fbda8073c5b/screen/6244c3d0ee142a1641f4fcd2',
  },
} as ComponentMeta<typeof LogoStory>;

const Template: ComponentStory<typeof Logo> = (args) => <LogoStory {...args} />;

const defaultArgs = {
  luma: true,
  imageSource: lumaLogo,
};
const otherArgs = {
  luma: false,
  imageSource:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/1280px-HSBC_logo_%282018%29.svg.png',
};

export const Luma = Template.bind({});
Luma.args = defaultArgs;

export const Issuer = Template.bind({});
Issuer.args = otherArgs;
