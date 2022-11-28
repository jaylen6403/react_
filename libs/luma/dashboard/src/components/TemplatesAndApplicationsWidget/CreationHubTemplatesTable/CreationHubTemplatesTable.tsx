import React from 'react';
import { CreationHubTemplate } from '@luma-fe-workspace/redux';
import { LumaTable } from '../../LumaTable';
import { TemplateLinkFn } from '../../LumaTable';
import { viewTemplate } from '../../../utils/links';
import {
  Cell,
  UnderlierChip,
  CellText,
  ChevronIcon,
  OverflowContainer,
} from './CreationHubTemplatesTable.styles';

interface Props {
  data: CreationHubTemplate[];
}

const buildUnderliers = (underlierList: string | undefined) => {
  const underliers = underlierList?.split(',');
  return underliers?.reduce((acc, cur, index) => {
    if (index <= 2 || underliers.length <= 4) {
      return [...acc, <UnderlierChip key={`ul-${index}`}>{cur}</UnderlierChip>];
    } else if (index === 3) {
      return [
        ...acc,
        <UnderlierChip key={index}>
          +{underliers?.length - 3} MORE
        </UnderlierChip>,
      ];
    } else {
      return [...acc];
    }
  }, [] as React.ReactNode[]);
};

export const CreationHubTemplatesTable = ({ data }: Props) => {
  const headers = ['Name', 'Structure', 'Underliers', ''];

  const finalData = [...data].reverse().slice(0, 5);
  const buildCreationHubRow = (rowData: CreationHubTemplate, idx: number) => {
    return [
      <Cell key={`${rowData.templateName}-${idx}`}>
        <OverflowContainer>{rowData.templateName}</OverflowContainer>
      </Cell>,
      <Cell key={`${rowData.structure}-${idx}`}>
        <OverflowContainer>{rowData.structure}</OverflowContainer>
      </Cell>,
      <Cell key={`underliers-${idx + Math.random()}`}>
        {buildUnderliers(rowData.underliers)}
      </Cell>,
      <Cell key={idx}>
        <CellText>{`View`}</CellText>
        <ChevronIcon iconCode="chevron-right" />
      </Cell>,
    ];
  };

  const headerArray = [
    headers.map((header, idx) => <Cell key={`header${idx}`}>{header}</Cell>),
  ];

  const creationHubRows = finalData.reduce(
    (acc, cur, idx) => {
      return {
        rows: [...acc.rows, buildCreationHubRow(cur, idx)],
        links: [...acc.links, viewTemplate(cur.templateId, cur.templateName)],
      };
    },
    { rows: headerArray as React.ReactNode[][], links: [] as TemplateLinkFn[] }
  );

  return (
    <LumaTable
      tableData={creationHubRows.rows}
      link={creationHubRows.links}
      mobileColumns={3}
    />
  );
};
