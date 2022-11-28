import {
  useGetProductsByIdentifierUsingGetQuery,
  useAppSelector,
  useAppDispatch,
  secondariesSlice,
  selectSecurityDetailsCusip,
} from '@luma-fe-workspace/redux';
import { FieldSection, FIELD_SECTIONS, FIELD_SECTION_NAMES } from './fields';
import {
  Content,
  FlexRowContainer,
  SectionButton,
  SecurityDetailsModal,
  FlexColumnContainer,
  TableHeader,
  SecurityDetailsLogoWrapper,
} from './SecurityDetails.styles';
import { SecondariesTable } from '../SecondariesTable/SecondariesTable';
import { ModalHeader } from '../Modal';
import lumaDark from '../../../../../design-system/src/lib/assets/logos/lumaDark.svg';
import { Logo } from '@luma-fe-workspace/design-system';
import { useEffect } from 'react';

export const SecurityDetails = ({
  initialCusip,
}: {
  initialCusip?: string;
  className?: string;
}) => {
  const dispatch = useAppDispatch();
  const cusip = useAppSelector(selectSecurityDetailsCusip); // TODO: update with selector to pull data
  const searchCusip = cusip || initialCusip;

  const { data, isError } = useGetProductsByIdentifierUsingGetQuery(
    { identifier: searchCusip ?? '' },
    { skip: !searchCusip }
  );

  useEffect(() => {
    if (isError) {
      dispatch(
        secondariesSlice.actions.setMessageObject({
          title: 'Unable to retrieve product data',
          messageType: 'error',
          isMessageShowing: true,
        })
      );
    }
  }, [dispatch, isError]);

  if (!data || !searchCusip) {
    return null;
  }

  const handleScroll = (sectionName: string) => {
    document
      .getElementById(sectionName)
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const securityDetailsId = 'security-details';

  // Header
  const ISSUER_AND_ID = [data.productGeneral.issuer, data.productGeneral.cusip]
    .filter(Boolean)
    .join('    •    '); // CSS `white-space:pre-wrap;` to prevent white-space collapse

  // Anchor Links to scroll to the various sections (tables)
  const securityDetailsAnchorLinkButtons = (
    <FlexRowContainer>
      <div className="sectionButtons">
        {FIELD_SECTION_NAMES.map((sectionName: string) => {
          return (
            <SectionButton
              onClick={() => handleScroll(sectionName)}
              key={`${sectionName}`}
            >
              {sectionName}
            </SectionButton>
          );
        })}
      </div>
    </FlexRowContainer>
  );

  // const securityDetailsDropdownButtons = (
  //   <FlexRowContainer>
  //     <SecurityDetailsDropdown
  //       items={documentsDropdownItems}
  //       placeholder="DOCUMENTS"
  //       variant={'secondary'}
  //       iconCodeLeft="file-alt"
  //       id="documentsDropdown"
  //     />
  //   </FlexRowContainer>
  // );

  const securityDetailsIssuerInfoAndTables = (
    <Content>
      <FlexRowContainer id="issuerDescription">
        <FlexColumnContainer>
          <div id="underlyings">Underlyings:</div>
          <div id="issueDescription">Issuer Description:</div>
          <TableHeader id="issuerAndId">{ISSUER_AND_ID}</TableHeader>
        </FlexColumnContainer>
        <SecurityDetailsLogoWrapper width={'6.25rem'} margin={'0 2.625rem'}>
          <Logo imageSource={lumaDark} />
        </SecurityDetailsLogoWrapper>
      </FlexRowContainer>
      {/* Need a flex container for the upper two tables (Product and Dates) */}
      <FlexRowContainer id="Core">
        {FIELD_SECTIONS.slice(0, 2).map((section: FieldSection) => {
          return (
            <SecondariesTable
              id={`${section.sectionName}Table`}
              key={section.sectionName}
              title={section.sectionName}
              data={section.data}
              rootStyles={'margin-bottom: 1rem'}
            />
          );
        })}
      </FlexRowContainer>
      {FIELD_SECTIONS.slice(2).map((section: FieldSection) => {
        return (
          <div id={`${section.sectionName}`} key={section.sectionName}>
            <SecondariesTable
              id={`${section.sectionName}Table`}
              title={section.sectionName}
              data={section.data}
              rootStyles={'margin-bottom: 1rem'}
            />
          </div>
        );
      })}
    </Content>
  );

  const securityDetailsActionBar = (
    <FlexRowContainer>{securityDetailsAnchorLinkButtons}</FlexRowContainer>
  );

  return (
    <SecurityDetailsModal
      id={`${securityDetailsId}_modal`}
      showModal={!!searchCusip}
      handleOnClose={() => {
        dispatch(secondariesSlice.actions.setSecurityDetailsCusip(undefined));
      }}
      width={'50rem'}
    >
      <ModalHeader
        id={`${securityDetailsId}_header`}
        title={`SECURITY DETAILS`}
        aria-label="close dialog"
        aria-describedby={securityDetailsId}
        handleOnClose={() => {
          dispatch(secondariesSlice.actions.setSecurityDetailsCusip(undefined));
        }}
      />
      {securityDetailsActionBar}
      {securityDetailsIssuerInfoAndTables}
    </SecurityDetailsModal>
  );
};
