import { Table, HeaderRow, RowContainer, RowDivider } from './LumaTable.styles';

export type TemplateLinkFn = () => void;

interface Props {
  tableData: React.ReactNode[][];
  link: TemplateLinkFn[] | undefined;
  mobileColumns: number | undefined;
  annuitiesTracker?: boolean | undefined;
}

export const LumaTable = ({
  tableData,
  link,
  mobileColumns,
  annuitiesTracker,
}: Props) => {
  return (
    <Table
      numberColumns={tableData[1] ? tableData[1].length : 4}
      mobileColumns={mobileColumns ? mobileColumns : 3}
      annuitiesTracker={annuitiesTracker}
    >
      <HeaderRow>{tableData[0]}</HeaderRow>
      <RowDivider />
      {tableData.slice(1).map((row: React.ReactNode, idx) => (
        <>
          <RowContainer
            onClick={(e) => {
              e.preventDefault();
              if (link != null) {
                link[idx]();
              }
            }}
            key={idx}
            link={link && link?.length > 0 ? true : false}
          >
            {row}
          </RowContainer>
          <RowDivider />
        </>
      ))}
    </Table>
  );
};
