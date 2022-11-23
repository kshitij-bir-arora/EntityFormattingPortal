import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import "bootstrap/dist/css/bootstrap.min.css";
import { GrAscend, GrDescend } from "react-icons/gr";

export default function ReactTable({ rowData, columnData }) {
  const data = rowData;

  const columns = columnData;

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    useTable({ columns, data }, useSortBy, usePagination);

  return (
    <table
      {...getTableProps()}
      className='table table-striped table-hover'
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <GrDescend />
                    ) : (
                      <GrAscend />
                    )
                  ) : (
                    ""
                  )}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
