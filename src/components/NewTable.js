import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GrAscend, GrDescend, GrFormSubtract } from "react-icons/gr";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { useTable, useSortBy, usePagination } from "react-table";
import { blueGrey, grey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

const NewTable = ({ rowData, columnData }) => {
  const data = rowData;
  const columns = columnData;

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: blueGrey[100],
      color: grey[900],
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const {
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
    prepareRow,
  } = useTable({ columns, data }, useSortBy, usePagination);

  const { pageIndex } = state;

  return (
    <Paper sx={{ width: "100%", overflow: "auto" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table
          stickyHeader
          aria-label='sticky table'
        >
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <StyledTableCell
                    align='left'
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <GrDescend />
                        ) : (
                          <GrAscend />
                        )
                      ) : (
                        <GrFormSubtract />
                      )}
                    </span>
                  </StyledTableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <StyledTableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <StyledTableCell align='left'>
                        {cell.render("Cell")}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <Box component='span'>
          <Typography variant='caption'>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </Typography>
        </Box>
        <IconButton
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <AiFillStepBackward />
        </IconButton>
        <IconButton
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <MdOutlineKeyboardArrowLeft />
        </IconButton>
        <IconButton
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <MdOutlineKeyboardArrowRight />
        </IconButton>
        <IconButton
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <AiFillStepForward />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default NewTable;
