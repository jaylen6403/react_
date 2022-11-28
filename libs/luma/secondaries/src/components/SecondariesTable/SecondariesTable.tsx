import {
  Root,
  Cell,
  HeaderRow,
  HeaderTitle,
  Row,
  FooterRow,
} from './SecondariesTable.styles';

export interface CellEffects {
  isGreyedOut?: boolean;
  hideTextOverflow?: boolean;
  width?: string;
  minWidth?: string;
  bold?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  fontSize?: string;
}

type Header<K> = CellEffects & { col: keyof K & string };

export interface SecondariesTableProps<T extends object> {
  /**
   * if Provided a dark grey footer will appear at the bottom. No way to embed anything in it
   */
  showFooter?: boolean;
  /**
   * title (optional): will create a Table Title above the header columns (if provided otherwise over the table)
   */
  title?: string;
  /**
   * headerCols (optional): if provided an array of type T is expected to present in the Table.
   *   The headerCols prop describes how each of these fields should show. Only shows fields from data
   *     that exist with this Object
   */
  headerCols?: Header<T>[];
  /**
   * data can be expressed in one of two ways. Either a table that represents a single Object or an array of
   *   Objects that will display rows based on the headerCols definition provided
   *   If headerCols are provided, data must be presented as an array of objects
   *   otherwise, a single object will be presented with a Bolded column to present
   *     the PropertyNames and on the right column the values
   */
  data: T[] | Record<string, unknown> | Record<string, unknown>[];
  id?: string;
  rootStyles?: string;
}

/**
 * The user of this table will have to define the type expected and that will define what possible
 *   columns are available
 */
export const SecondariesTable = <T extends object>({
  title,
  showFooter,
  headerCols,
  data,
  id,
  rootStyles,
}: SecondariesTableProps<T>) => {
  const colLen = headerCols ? headerCols.length : 2;
  if (headerCols && !Array.isArray(data)) {
    headerCols = undefined;
  }
  return (
    <Root
      style={headerCols ? {} : { tableLayout: 'fixed' }}
      id={id}
      rootStyles={rootStyles}
    >
      <thead>
        {title ? (
          <HeaderRow>
            <HeaderTitle scope="colgroup" colSpan={colLen}>
              {title}
            </HeaderTitle>
          </HeaderRow>
        ) : null}
        {headerCols ? (
          <HeaderRow>
            {headerCols.map((colDefinition) => (
              <Cell
                scope="col"
                key={colDefinition.col}
                textAlign={colDefinition.textAlign}
              >
                {colDefinition.col}
              </Cell>
            ))}
          </HeaderRow>
        ) : null}
      </thead>
      <tbody>
        {headerCols
          ? (data as any).map((datum: T, idx: number) => (
              <Row
                className={(idx + 1) % 2 === 0 ? 'even-row' : 'odd-row'}
                key={'row' + idx}
              >
                {headerCols &&
                  headerCols.map((colDefinition) => {
                    const { col } = colDefinition;
                    return (
                      <Cell {...colDefinition} key={datum[col] + '' + idx}>
                        {datum[col]}
                      </Cell>
                    );
                  })}
              </Row>
            ))
          : Object.keys(data).map((key: string, idx) => (
              <Row
                className={(idx + 1) % 2 === 0 ? 'even-row' : 'odd-row'}
                key={key + idx}
              >
                <Cell bold={true}>{key}</Cell>
                <Cell hideTextOverflow>{(data as any)[key]}</Cell>
              </Row>
            ))}
      </tbody>
      <tfoot>
        {showFooter ? (
          <tr>
            <FooterRow colSpan={colLen}></FooterRow>
          </tr>
        ) : null}
      </tfoot>
    </Root>
  );
};
