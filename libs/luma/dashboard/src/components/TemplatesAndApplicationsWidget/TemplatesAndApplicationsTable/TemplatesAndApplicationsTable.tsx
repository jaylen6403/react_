import {
  CreationHubTemplate,
  OrderHistoryResponse,
} from '@luma-fe-workspace/redux';
import { ProductType } from '../../../utils/types';
import { CreationHubTemplatesTable } from '../CreationHubTemplatesTable/CreationHubTemplatesTable';
import { AnnuityApplicationsTable } from '../AnnuitiesApplicationTable/AnnuityApplicationsTable';
import { mostRecentAnnuitiesData } from '../../../utils/AnnuityApplicationUtils';

interface Props {
  data: CreationHubTemplate[] | OrderHistoryResponse[];
  productType: ProductType;
}

export const TemplatesAndApplicationsTable = ({ data, productType }: Props) => {
  const isStructuredProduct = (
    data: CreationHubTemplate[] | OrderHistoryResponse[]
  ): data is CreationHubTemplate[] =>
    (data as CreationHubTemplate[])[0].templateId !== undefined;

  if (isStructuredProduct(data)) {
    return <CreationHubTemplatesTable data={data} />;
  } else {
    const annuitiesData = mostRecentAnnuitiesData(data);

    return <AnnuityApplicationsTable data={annuitiesData} />;
  }
};
