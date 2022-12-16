import { useMemo } from "react";
import styled from "styled-components";
import { useTable, usePagination } from "react-table";

export interface ITableConfig {
  columnLabel: { Header: string; accessor: string }[];
  columnCellWidth: number[];
  cellHeight?: string;
  fontSize?: string;
  minWidth?: string;
  tableHeight?: string;
  customFormat?: {
    key: string;
    formatFunc: (cell: any) => React.ReactNode;
  }[];
}

interface ITableProps {
  tableData: any[];
  tableConfig: ITableConfig;
}

export const getOtherCellValue = (cell: any, key: string) => {
  return cell.row.original[key];
};

export const Table = ({
  tableData,
  tableConfig: {
    columnLabel,
    columnCellWidth,
    cellHeight,
    fontSize,
    minWidth,
    tableHeight,
    customFormat,
  },
}: ITableProps) => {
  const columns = useMemo(() => columnLabel, []);
  const data = useMemo(() => tableData, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    // @ts-ignore
    columns,
    data,
  });

  const GRID_COLUMN = `${columnCellWidth.map((num) => ` ${num}fr`)}`.split(",").join("");

  return (
    <Table_Wrapper tableHeight={tableHeight}>
      <Table_Tag
        {...getTableProps}
        gridColumn={GRID_COLUMN}
        cellHeight={cellHeight}
        minWidth={minWidth}
        fontSize={fontSize}
      >
        <Table_Head>
          {headerGroups.map((headerGroup) => (
            <Head_Row {...headerGroup.getHeaderGroupProps()} key={Math.random()}>
              {headerGroup.headers.map((col) => (
                <Head_Cell {...col.getHeaderProps()} key={Math.random()}>
                  {col.render("Header")}
                </Head_Cell>
              ))}
            </Head_Row>
          ))}
        </Table_Head>
        <Table_Body {...getTableBodyProps}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Body_Row {...row.getRowProps()} key={Math.random()}>
                {row.cells.map((cell) => {
                  const columnId = cell.column.id;
                  const customIndex = customFormat?.findIndex((format) => format.key === columnId);

                  if (customFormat && customIndex !== undefined && customIndex !== -1) {
                    // 1. Custom Cell
                    return (
                      <Body_Cell {...cell.getCellProps()} key={Math.random()}>
                        {customFormat[customIndex].formatFunc(cell)}
                      </Body_Cell>
                    );
                  } else {
                    // 2. Default Cell
                    return (
                      <Body_Cell {...cell.getCellProps()} key={Math.random()}>
                        {cell.value}
                      </Body_Cell>
                    );
                  }
                })}
              </Body_Row>
            );
          })}
        </Table_Body>
      </Table_Tag>
    </Table_Wrapper>
  );
};

const Table_Wrapper = styled.div<{
  tableHeight?: string;
}>`
  width: 100%;
  overflow: auto;
  table-layout: fixed;
  height: ${(props) => (props.tableHeight ? props.tableHeight : "100%")};
  position: relative;
  border-radius: 20px;
`;

const Table_Tag = styled.table<{
  gridColumn: string;
  minWidth?: string;
  cellHeight?: string;
  fontSize?: string;
}>`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  tr {
    display: grid;
    grid-template-columns: ${(props) => props.gridColumn};
    min-width: ${(props) => (props.minWidth ? props.minWidth : "1500px")};
    height: ${(props) => (props.cellHeight ? props.cellHeight : "30px")};
  }
  td,
  th {
    ${({ theme }) => theme.mixin.flexCenter};
    overflow: hidden;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "40px")};
  }
`;

const Table_Head = styled.thead`
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Table_Body = styled.tbody`
  tr:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.background_sub_color};
  }
`;

const Head_Row = styled.tr`
  background-color: ${({ theme }) => theme.colors.background_color};
`;

const Body_Row = styled.tr`
  border-top: 1px solid ${({ theme }) => theme.colors.background_sub_color};
  &:hover {
    background-color: ${({ theme }) => theme.colors.background_sub_color};
  }
`;

const Head_Cell = styled.th``;

const Body_Cell = styled.td``;
