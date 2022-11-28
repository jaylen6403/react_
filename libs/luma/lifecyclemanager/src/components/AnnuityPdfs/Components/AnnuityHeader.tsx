import './AnnuityHeader.css';

export const AnnuityHeader = () => {
  return (
    <header>
      <image className="headerImage">
        <img
          className="rectangle-5"
          src="https://anima-uploads.s3.amazonaws.com/projects/6304f96848232f777a45dd97/releases/6304fbed68f759b4fd1618ba/img/rates-view---luma-rectangle-FED34FDF-C0C4-40CF-A713-38298D94A956.png"
          alt="luma-rectangle"
        />
        <img
          className="assets-luma-logo"
          src="https://anima-uploads.s3.amazonaws.com/projects/6304f96848232f777a45dd97/releases/6304fbed68f759b4fd1618ba/img/rates-view---luma-assetsluma-logosname--flamelighthorizontal-9021C587-0957-4894-A267-024F86B3A5B8@2x.png"
          alt="luma-logo"
        />
      </image>
      <section className="headerTitle">
        <div className="product-name ibmplexsans-bold-mine-shaft-12px">
          18m Point to Point Capped Dual Directional on Worst of RTY, NDX, INDU
        </div>
        <img
          className="carrier-logo-asset"
          src="https://app.lumafintech.com/cms-assets/DEV/images/company-logos/annuities/transamerica.png"
          alt="carrier-logo"
        />
      </section>
    </header>
  );
};
