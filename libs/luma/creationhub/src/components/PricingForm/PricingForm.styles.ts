import styled from 'styled-components';
import { Form } from 'formik';
import { LumaColor, breakpoints, Icon } from '@luma-fe-workspace/design-system';
import { PricingModes } from './PricingFormUtils';

export const CH2Form = styled(Form)`
  height: 100%;
`;

export const PricingFormWrapper = styled.main`
  display: flex;
  min-height: 6.25rem;
  height: inherit;
  flex-direction: column;

  @media ${breakpoints.desktop} {
    flex-direction: column;
  }
`;

export const FormsRow = styled.div`
  display: flex;
  position: relative;
  height: inherit;
  -ms-overflow-style: none;
  flex-direction: row;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RequestTabsRow = styled.div`
  flex: 1;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  width: 100vw;
  flex-direction: row;

  &::-webkit-scrollbar {
    display: none;
  }
`;

type FormPanelProps = {
  mode: PricingModes;
};

export const FormLeftPanel = styled.div.attrs((props: FormPanelProps) => ({
  mode: props.mode || PricingModes.Pricing,
}))`
  width: 100%;
  height: 100%;
  flex: 2;
  padding: 0 1.5rem 1.5rem;
  -ms-overflow-style: none;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  @media (${breakpoints.desktop}) or (${breakpoints.tablet}) or (${breakpoints.phablet}) or (${breakpoints.mobile}) {
    padding-bottom: 3rem;
    ${(props) => (props.mode === PricingModes.Pricing ? '' : '')}
  }
  @media ${breakpoints.largeDesktop} {
    width: auto;
  }
`;

export const FormRightPanel = styled.div.attrs((props: FormPanelProps) => ({
  mode: props.mode || PricingModes.Pricing,
}))`
  flex: 0 1 auto;
  padding: 0 1.5rem 1.5rem 0;
  background-color: ${LumaColor.NEUTRAL_10};
  z-index: 1;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (${breakpoints.desktop}) or (${breakpoints.tablet}) or (${breakpoints.phablet}) or (${breakpoints.mobile}) {
    position: absolute;
    top: 0;
    transition: transform 1s;
    width: 100%;
    height: 100vh;

    ${(props) =>
      props.mode === PricingModes.Pricing
        ? `transform: translateX(100%);`
        : `transform: translateX(0%);`}
  }

  @media ${breakpoints.largeDesktop} {
    width: 36rem;
    display: block;
  }
`;

export const FormGroupWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  border-radius: 8px;
  border: solid 0.0625rem ${LumaColor.NEUTRAL_40};
  background-color: ${LumaColor.NEUTRAL_00_WHITE};
  margin-top: 1.5rem;
`;

export const UpperRightGroup = styled.div`
  overflow: unset;
`;

export const BottomRightGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.5rem 0 0;
  gap: 1rem;
  width: 26rem;
`;

export const Footer = styled.footer`
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  z-index: 2;
  justify-content: flex-end;
  align-items: center;
  min-height: 4.5rem;
  background: ${LumaColor.NEUTRAL_00_WHITE};
  gap: 1rem;
  padding: 1rem 1rem 0 1.5rem;

  @media ${breakpoints.largeDesktop} {
    display: none;
  }
`;

export const XIcon = styled(Icon)`
  height: '2rem';
  marginleft: '0.5rem';
  width: '1.3125rem';
  alignitems: 'center';
  alignself: 'center';
`;
