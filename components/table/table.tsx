import styled from "styled-components";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import { IInfiniteFetchReturn } from "utils/queries/queries";

export interface ITableCell {
  getValue: () => any;
  row: {
    original: any;
  };
}

export interface IColumnData {
  header: string;
  accessorKey: string;
  cell?: ({ cell }: { cell: ITableCell }) => any;
}

export interface ITableConfig {
  columnData: IColumnData[];
  columnCellWidth: number[];
  cellHeight?: string;
  fontSize?: string;
  minWidth?: string;
  tableHeight?: string;
  infiniteScroll?: boolean;
  handleInfiniteFetch?: () => void;
}

interface ITableProps {
  tableData: any[] | undefined;
  tableConfig: ITableConfig;
}

export const getOtherCellValue = (cell: ITableCell, key: string) => {
  return cell.row.original[key];
};

export const getInfiniteQueriesDataArray = (
  data: { pages: IInfiniteFetchReturn<any[]>[] } | undefined
) => {
  const dataArray: any[] = [];
  data?.pages.map((page) => {
    dataArray.push(...page.result.results);
  });

  return dataArray;
};

export const Table = ({
  tableData,
  tableConfig: {
    columnData,
    columnCellWidth,
    cellHeight,
    fontSize,
    minWidth,
    tableHeight,
    infiniteScroll,
    handleInfiniteFetch,
  },
}: ITableProps) => {
  const columns = useMemo(() => columnData, []);
  const defaultData = useMemo(() => [], []);
  const gridColumn = useMemo(
    () => `${columnCellWidth.map((num) => ` ${num}fr`)}`.split(",").join(""),
    []
  );

  const [ref, inView] = useInView();

  useEffect(() => {
    if (!tableData) return;

    if (handleInfiniteFetch && inView) {
      handleInfiniteFetch();
    }
  }, [inView]);

  const table = useReactTable({
    data: tableData ?? defaultData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    debugTable: true,
  });

  return (
    <Table_Wrapper tableHeight={tableHeight}>
      <Table_Tag
        gridColumn={gridColumn}
        cellHeight={cellHeight}
        minWidth={minWidth}
        fontSize={fontSize}
      >
        <Table_Head>
          {table.getHeaderGroups().map((headerGroup) => (
            <Head_Row key={headerGroup.id} className="rows">
              {headerGroup.headers.map((header) => (
                <Head_Cell key={header.id} colSpan={header.colSpan} className="cells">
                  {header.isPlaceholder ? null : (
                    <>{flexRender(header.column.columnDef.header, header.getContext())}</>
                  )}
                </Head_Cell>
              ))}
            </Head_Row>
          ))}
        </Table_Head>
        <Table_Body>
          <>
            {table.getRowModel().rows.map((row) => (
              <Body_Row key={row.id} className="rows">
                {row.getVisibleCells().map((cell) => (
                  <Body_Cell key={cell.id} className="cells">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Body_Cell>
                ))}
              </Body_Row>
            ))}
            {infiniteScroll && <Inview_Tag ref={ref} />}
          </>
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
  .rows {
    display: grid;
    grid-template-columns: ${(props) => props.gridColumn};
    min-width: ${(props) => (props.minWidth ? props.minWidth : "1500px")};
    height: ${(props) => (props.cellHeight ? props.cellHeight : "30px")};
  }
  .cells {
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
  position: relative;
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

const Inview_Tag = styled.tr`
  position: absolute;
  bottom: 100px;
  width: 20px;
  height: 20px;
  min-width: 20px;
  background-color: #ffee00;
`;
