import { IconName } from '@fortawesome/fontawesome-svg-core';
import { colors, Icon } from '@luma-fe-workspace/design-system';
import { Cell, Row, Table } from './ProductDetailsTable.styles';

interface ProductDetailsDataElement {
  field: string;
  value: string | number;
  iconName?: IconName;
}

interface ProductDetailsTableProps {
  data: ProductDetailsDataElement[];
}

export const ProductDetailsTable = ({ data }: ProductDetailsTableProps) => {
  return (
    <Table>
      <div className="product-details ibmplexsans-bold-mine-shaft-12px">
        Product Details
      </div>
      {data.map((dataElement: ProductDetailsDataElement, index: number) => (
        <Row key={dataElement.field}>
          <Cell>
            {dataElement.iconName && (
              <Icon
                iconCode={dataElement.iconName}
                style={{ color: colors.neutral75 }}
                prefix={'far'}
              />
            )}
            {dataElement.field}
          </Cell>
          <Cell>{dataElement.value}</Cell>
        </Row>
      ))}
    </Table>
  );
};
