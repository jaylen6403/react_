import { Card } from '@luma-fe-workspace/design-system';
import {
  useGetCreationHubTemplatesUsingGetQuery,
  useGetOrderHistoryUsingGet1Query,
  useCrossSiteCstQuery,
} from '@luma-fe-workspace/redux';
import { ProductTypes } from '../../utils/types';
import { TemplatesAndApplicationsTable } from './TemplatesAndApplicationsTable/TemplatesAndApplicationsTable';
import { EmptyState } from '../EmptyState/EmptyState';
import {
  createNewRequestUrl,
  viewAllTemplates,
  viewAllAnnuities,
} from '../../utils/links';
import { EmptyStates } from '../../utils/emptyStateUtils';
import { Spinner } from '../Spinner/Spinner';
import {
  StyledCreationHubWidget,
  StyledCreationHubBody,
  TableWrapper,
  TemplatesLink,
  Title,
  Header,
  CreateNewRequest,
  ChevronIcon,
} from './TemplatesAndApplicationsWidget.styles';

interface Props {
  productType: ProductTypes;
  screenWidth: number;
  otherWidgetPresent: boolean;
  isIssuer: boolean;
}

export const TemplatesAndApplicationsWidget = ({
  productType,
  screenWidth,
  otherWidgetPresent,
  isIssuer,
}: Props) => {
  const { data: creationHubData, isLoading: creationHubLoading } =
    useGetCreationHubTemplatesUsingGetQuery();

  const { data: annuitiesData, isLoading: annuitiesLoading } =
    useGetOrderHistoryUsingGet1Query();

  const isSmall = otherWidgetPresent && screenWidth >= 1440;
  const chEmptyStateType = isIssuer
    ? EmptyStates.CreationHubIssuer
    : EmptyStates.CreationHub;

  const tableData =
    productType === ProductTypes.StructuredProducts
      ? creationHubData
      : annuitiesData;

  const tableLoading =
    productType === ProductTypes.StructuredProducts
      ? creationHubLoading
      : annuitiesLoading;

  if (!tableLoading && !tableData?.length) {
    return (
      <EmptyState
        isSmall={isSmall ? true : false}
        emptyStateType={
          productType === ProductTypes.Annuities
            ? EmptyStates.ApplicationTracker
            : chEmptyStateType
        }
        margin={isSmall ? 1.5 : 0}
      />
    );
  }

  return (
    <Card
      flexDirection="column"
      backgroundColor="transparent"
      margin={isSmall ? 1.5 : 0}
    >
      <Title>
        {productType === ProductTypes.StructuredProducts ? (
          <Header>Creation Templates</Header>
        ) : (
          <Header>Application Tracker</Header>
        )}
        {productType === ProductTypes.StructuredProducts ? (
          <CreateNewRequest onClick={() => createNewRequestUrl()}>
            Create New Request
          </CreateNewRequest>
        ) : null}
      </Title>
      <StyledCreationHubWidget
        isSmall={isSmall ? true : false}
        isLoading={tableLoading}
      >
        {tableData && tableData.length > 0 && !tableLoading ? (
          <StyledCreationHubBody isSmall={isSmall}>
            <TableWrapper>
              <TemplatesAndApplicationsTable
                productType={productType}
                data={tableData}
              />
            </TableWrapper>
            <TemplatesLink
              onClick={() => {
                productType === ProductTypes.StructuredProducts
                  ? viewAllTemplates()
                  : (window.location.href = viewAllAnnuities());
              }}
            >
              {productType === ProductTypes.StructuredProducts
                ? `View All Templates`
                : `View All Applications`}
              <ChevronIcon iconCode="chevron-right" />
            </TemplatesLink>
          </StyledCreationHubBody>
        ) : (
          <Spinner />
        )}
      </StyledCreationHubWidget>
    </Card>
  );
};
