import {
  HeaderWrapper,
  LumaLogo,
  LumaRectangle,
  LumaFlame,
  ProductName,
  ProductSubName,
  CarrierLogo,
} from './PerformanceHeader.styles';

interface PerformanceHeaderElement {
  name: string;
  subName?: string;
  carrier: string;
}

export const PerformanceHeader = ({
  name,
  subName,
  carrier,
}: PerformanceHeaderElement) => {
  return (
    <HeaderWrapper>
      <LumaLogo>
        <LumaRectangle
          src="https://anima-uploads.s3.amazonaws.com/projects/6304f96848232f777a45dd97/releases/6304fbed68f759b4fd1618ba/img/rates-view---luma-rectangle-FED34FDF-C0C4-40CF-A713-38298D94A956.png"
          alt="luma-rectangle"
        />
        <LumaFlame
          src="https://anima-uploads.s3.amazonaws.com/projects/6304f96848232f777a45dd97/releases/6304fbed68f759b4fd1618ba/img/rates-view---luma-assetsluma-logosname--flamelighthorizontal-9021C587-0957-4894-A267-024F86B3A5B8@2x.png"
          alt="luma-logo"
        />
      </LumaLogo>
      <div>
        <ProductName>{name}</ProductName>
        <ProductSubName>{subName}</ProductSubName>
        <CarrierLogo src={carrier} alt="logo" />
      </div>
    </HeaderWrapper>
  );
};
