import { Tab, TabProps } from '../Tab/Tab';
import {
  ActionBar,
  HeaderBar,
  TableContainer,
  TabWrapper,
  Title,
  WidgetContainer,
} from './Widget.styles';

interface WidgetProps<T> {
  title: string;
  table: React.ReactNode;
  id?: string;
  actionBar?: React.ReactNode;
  tabs?: TabProps<T>[];
}

export function Widget<T>({
  id,
  title,
  table,
  actionBar,
  tabs,
}: WidgetProps<T>) {
  return (
    <WidgetContainer id={id ? `widgetcontainer - ${id}` : undefined}>
      <HeaderBar>
        <Title>{title}</Title>
        <TabWrapper>
          {tabs &&
            tabs.map((tab) => {
              return <Tab {...tab} key={tab.id} />;
            })}
        </TabWrapper>
      </HeaderBar>
      {actionBar && <ActionBar>{actionBar}</ActionBar>}
      <TableContainer>{table}</TableContainer>
    </WidgetContainer>
  );
}
