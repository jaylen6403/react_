import {
  Container,
  Disclaimer,
  SectionHeader,
  SectionParagraph,
} from './AppFooter.styles';

import {
  useGetWhitelabelInfoUsingGetQuery,
  WhitelabelInfo,
} from '@luma-fe-workspace/redux';

type LinkValues = {
  text: string;
  link: string;
};

const formatLink = (link: string) => {
  if (link.startsWith('http')) {
    return link;
  }
  return `https://${link}`;
};

const createLink = (linkValues: LinkValues) => (
  <a target="_blank" rel="noreferrer" href={formatLink(linkValues.link)}>
    {linkValues.text}
  </a>
);

const displayWhitelabel = (
  whitelabel: WhitelabelInfo['disclaimers'] | undefined
) => {
  if (whitelabel) {
    return Object.entries(whitelabel).map(([k, v], i) => {
      return (
        <div key={`whitelabel-link-${i}`}>
          {createLink({ text: k, link: v })}
        </div>
      );
    });
  }
  return;
};

export const AppFooter = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  const { data: whiteLabelInfo } = useGetWhitelabelInfoUsingGetQuery();

  return (
    <Container className={className}>
      <Disclaimer>
        For Broker-Dealer or Registered Investment Advisor use only
      </Disclaimer>
      {displayWhitelabel(whiteLabelInfo?.disclaimers)}
      <SectionParagraph>
        By using this platform you accept and agree to abide by the terms of the
        “Platform Policies” as specified{' '}
        {createLink({
          text: 'here',
          link: 'https://lumafintech.com/platform-policies/',
        })}
        .
      </SectionParagraph>
      <SectionHeader>Structured Products:</SectionHeader>
      <SectionParagraph>
        When applicable to the product type, the issuer has filed a registration
        statement (including prospectus) with the SEC for the offering to which
        this communication relates. Before you invest in an investment product,
        you should read the offering documentation of that investment product.
        For products registered and offered in the United States, you should
        read the prospectus in that registration statement and other documents
        the issuer has filed with the SEC for more complete information about
        the issuer and this offering. You may obtain these documents for
        registered products in the United States for free by visiting EDGAR on
        the SEC web site at{' '}
        {createLink({ text: 'www.sec.gov', link: 'https://www.sec.gov' })}.
        Alternatively, the issuer, any underwriter or any dealer participating
        in the offering will arrange to send you the prospectus if you request
        it by emailing{' '}
        {createLink({
          text: 'support@lumafintech.com',
          link: 'mailto: support@lumafintech.com',
        })}
        <br />
        <br />
        {`For investment products not registered in the United States, you are
        required to strictly follow the selling restrictions contained in the
        relevant offering documentation. In particular, any products designated
        "Reg-S" or "Regulation S" will not be registered under the Securities
        Act and may not be offered or sold within the United States or to "U.S.
        persons" except in accordance with the provisions of Regulation S under
        the Securities Act or pursuant an applicable exemption from the
        registration requirements of the Securities Act.`}
        <br />
        <br />
        Additional information regarding market-linked CDs and associated risks
        can be found at{' '}
        {createLink({
          text: 'www.FINRA.org',
          link: 'https://www.FINRA.org',
        })}{' '}
        and{' '}
        {createLink({
          text: 'www.sec.gov/answers/equitylinkedcds.htm',
          link: 'https://www.sec.gov/answers/equitylinkedcds.htm',
        })}
        .
      </SectionParagraph>
      <SectionHeader>Insurance and Annuity Products:</SectionHeader>
      <SectionParagraph>
        Annuities are products of the insurance industry and are not (a) insured
        by the FDIC or any federal government agency, (b) deposits of or
        guaranteed by any bank or credit union and (c) a provision or condition
        of any bank or credit union activity. Some annuities are subject to
        investment risk and may lose value. These products may only be offered
        by a licensed insurance agent. Guarantees are backed by the financial
        strength based on the claims-paying ability of the issuing insurance
        company and do not protect the value of the variable investment options,
        which are subject to market risk.
        <br />
        <br />
        Annuities contain features, fees, risks, exclusions and limitations that
        vary by state. For a full explanation of an annuity, please refer to the
        Certificate of Disclosure or Prospectus (as applicable) and contact a
        financial professional or the issuing insurance company for costs and
        complete details. Before deciding on an annuity, considerations should
        include income needs, risk tolerance and investment objectives.
        <br />
        <br />
        Withdrawals will reduce the contract value and the value of any
        protection benefits. Withdrawals may be subject to ordinary income taxes
        and, if made prior to age 59½, may be subject to a 10% IRS penalty;
        Surrender charges may also apply.
        <br />
        <br />
        The platform may include insurance and annuity information on the
        following product types: (a) variable annuities, (b) fixed annuities,
        (c) fixed indexed annuity, (d) universal life insurance, (d) variable
        life insurance, (f) variable universal life insurance, or (g) indexed
        universal life insurance. For more information about each product type,
        please refer to the Disclosure Statement or Prospectus provided by the
        issuing insurance company for each product.
        <br />
      </SectionParagraph>
      <SectionHeader>General:</SectionHeader>
      <SectionParagraph>
        Use of this platform is intended for registered users only. The
        information contained on the platform is not intended as, nor should it
        be construed as, legal, tax, or investment advice. Further, none of the
        information contained on this platform constitutes an offer by Luma
        Financial Technologies, LLC or its subsidiaries to sell any investment
        products in any jurisdiction. With respect to any investment product,
        investors should carefully review the relevant offering documentation,
        including the section(s) regarding risks, and consult with a qualified
        financial advisor prior to investing. Users of this website agree that
        the information contained herein will not be the primary basis of any
        investment decisions and that this website does not contain an
        exhaustive list of all risks related to the financial products discussed
        herein.
        <br />
        <br />
        Certain user groups may have expanded or restricted access to platform
        features based on registration type or geographical location and as such
        may have functionality that is designed for non-Broker Users.
        <br />
        <br />
        By using this platform you agree to accept the “Terms and Conditions” as
        specified in the “Terms of Use” section on our website{' '}
        {createLink({
          text: 'www.lumafintech.com',
          link: 'https://www.lumafintech.com',
        })}
        .
        <br />
        <br />
        This platform is the intellectual property of Luma Financial
        Technologies. © 2021 Luma Financial Technologies, All Rights Reserved.
        Luma Financial Technologies, 425 Walnut Street, Suite 2410, Cincinnati,
        OH 45202. Securities information provided by LFT Securities, LLC, Member
        FINRA. FINRA’s BrokerCheck – Check the background for LFT Securities on{' '}
        {createLink({
          text: 'FINRA’s BrokerCheck',
          link: 'https://brokercheck.finra.org/firm/summary/290210',
        })}
        .
      </SectionParagraph>
    </Container>
  );
};
