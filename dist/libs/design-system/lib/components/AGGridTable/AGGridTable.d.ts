/// <reference types="react" />
import 'ag-grid-enterprise/dist/styles/ag-grid.css';
import { GetRowNodeIdFunc, GridOptions } from 'ag-grid-community';
declare type TableProps = {
    gridOptions: GridOptions | undefined;
    customStyles?: string;
    getRowNodeId?: GetRowNodeIdFunc;
};
export declare const AGGridTable: ({ gridOptions, customStyles, getRowNodeId, }: TableProps) => JSX.Element;
export {};
