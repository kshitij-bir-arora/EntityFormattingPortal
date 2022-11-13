import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useCSVReader, formatFileSize } from "react-papaparse";
import "../Styles/FileInputForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { config } from "../utils/FileHelper";
import ReactTable from "./ReactTable";
import * as XLSX from "xlsx";
import { FiUpload } from "react-icons/fi";
import { CiWarning } from "react-icons/ci";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const UserDashboard = ({ Authenticated }) => {
  const navigate = useNavigate();
  const [isRemoved, setIsRemoved] = useState(true);
  const [updatedRow, setUpdatedRow] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const { CSVReader } = useCSVReader();
  const [csvData, setCsvData] = useState({});
  const [zoneHover, setZoneHover] = useState(false);
  const [columnData, setColumnData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  //   method to redirect to homepage if user tries to access dashboard through url
  // useEffect(() => {
  //   if (!Authenticated) {
  //     navigate("/");
  //   }
  // }, [Authenticated]);

  useEffect(() => {
    if (rowData.length > 0) {
      setRows(rowData);
    }
    if (columnData.length > 0) {
      setColumns(columnData);
    }
  }, [rowData, columnData]);

  //   extract headers and file data as soon as file is uploaded
  useEffect(() => {
    if (Object.keys(csvData).length > 0) {
      const columns = csvData?.data[0]?.map((col, index) => {
        return {
          Header: col.trim(),
          accessor: col.trim().split(" ").join().toLowerCase(),
        };
      });

      const rows = csvData.data
        .slice(1)
        .slice(0, -1)
        .map((row) => {
          return row.reduce((acc, curr, index) => {
            acc[columns[index].accessor] = curr;
            return acc;
          }, {});
        });

      setColumnData(columns);
      setRowData(rows);
      setOriginalData(rows);
    }
  }, [csvData]);

  //   method to set the results once file is uploaded
  const handleFileUpload = (results) => {
    setZoneHover(false);
    setCsvData(results);
    setIsRemoved(false);
  };

  //   method to remove the file once user clicks on button
  const handleRemove = (e) => {
    e.preventDefault();
    setIsRemoved(true);
  };

  //   method to format the data in the table once users selects a column and format
  const handleFormat = async (e) => {
    setSelectedFormat(e.target.value);

    let res = [];

    const newOriginalData = originalData;

    switch (selectedColumn) {
      case "date":
        if (e.target.value === "DD MMM YYYY") {
          res = newOriginalData.map((row) => {
            const newDate = dayjs(row[selectedColumn]);
            row[selectedColumn] = newDate.format("DD MMM YYYY");
            return row;
          });
        } else {
          res = newOriginalData.map((row) => {
            const newDate = dayjs(row[selectedColumn]);
            row[selectedColumn] = newDate.format("MMM DD YYYY");
            return row;
          });
        }
        break;
      case "name":
        if (e.target.value === "Lowercase") {
          res = newOriginalData.map((row) => {
            row[selectedColumn] = row[selectedColumn].toLowerCase();
            return row;
          });
        } else {
          res = newOriginalData.map((row) => {
            row[selectedColumn] = row[selectedColumn].toUpperCase();
            return row;
          });
        }
        break;
      case "amount":
        if (e.target.value === "INR") {
          res = newOriginalData.map((row) => {
            const newAmount = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "inr",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(row[selectedColumn]);

            row[selectedColumn] = newAmount;
            return row;
          });
        } else if (e.target.value === "USD") {
          res = newOriginalData.map((row) => {
            const newAmount = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "usd",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(row[selectedColumn]);

            row[selectedColumn] = newAmount;
            return row;
          });
        }
        break;
      case "cost":
        if (e.target.value === "Round Up") {
          res = newOriginalData.map((row) => {
            const newValue = parseFloat(row[selectedColumn]);
            row[selectedColumn] = Math.ceil(newValue);
            return row;
          });
        } else if (e.target.value === "Round Down") {
          res = newOriginalData.map((row) => {
            const newValue = parseFloat(row[selectedColumn]);
            row[selectedColumn] = Math.floor(newValue);
            return row;
          });
        }
        break;
      case "discount":
        if (e.target.value === "Percentage") {
          res = newOriginalData.map((row) => {
            const newDiscount = parseFloat(row[selectedColumn]);
            row[selectedColumn] = newDiscount.toLocaleString("en-US", {
              style: "percent",
            });
            return row;
          });
        }
        break;
      default:
        return rows;
        break;
    }

    setRowData(res);
  };

  // method for downloading the file
  const handleDownload = (e) => {
    e.preventDefault();
    console.log(rowData);
    var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(rowData);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "FormattedFile.xlsx");

    // calling server api to store the updated data.
    axios.post("http://localhost:8081/api/files/upload", rowData, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });

    console.log(rowData);

    // toast of success
    toast.success("File downloaded successfully!");
  };

  return (
    <div
      className='container-fluid'
      style={{ marginTop: "50px" }}
    >
      <ToastContainer />
      <div className='row mb-2'>
        {/* upload file component */}
        <div className='col-lg-12 '>
          {/* enter file uploader here */}
          <CSVReader
            onUploadAccepted={handleFileUpload}
            onDragOver={(event) => {
              event.preventDefault();
              setZoneHover(true);
            }}
            onDragLeave={(event) => {
              event.preventDefault();
              setZoneHover(false);
            }}
          >
            {({ getRootProps, acceptedFile, ProgressBar }) => (
              <>
                <div
                  {...getRootProps()}
                  className='zone'
                >
                  {acceptedFile && !isRemoved ? (
                    <>
                      <div className='file'>
                        <div className='info'>
                          <span className='size'>
                            {formatFileSize(acceptedFile.size)}
                          </span>
                          <span className='name'>{acceptedFile.name}</span>
                        </div>
                        <div className='ProgressBar'>
                          <ProgressBar />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <span>
                        <FiUpload />
                      </span>
                      <Typography
                        variant='h6'
                        gutterBottom
                      >
                        Click to upload file.
                      </Typography>
                    </>
                  )}
                </div>
              </>
            )}
          </CSVReader>
          {/* end of file uploader */}
        </div>
      </div>
      {/* actions and table component dynamically rendered here */}
      {rows.length > 0 && !isRemoved ? (
        <div className='row'>
          <div className='col-lg-12'>
            <div className='card'>
              <div className='card-body'>
                <div className='row'>
                  {/* start of actions component */}
                  <div className='col-lg-5'>
                    <div style={{ margin: "1rem" }}>
                      <Typography
                        variant='h6'
                        style={{ margin: "1rem 0" }}
                      >
                        Actions
                      </Typography>
                      <FormControl fullWidth>
                        <InputLabel id='select-label'>Select Column</InputLabel>
                        <Select
                          labelId='select-label'
                          id='simple-select'
                          value={selectedColumn}
                          label='Select Column'
                          onChange={(e) => setSelectedColumn(e.target.value)}
                        >
                          {/* mapping the header values in our file to the dropdown
                          where user can select the column to format */}
                          {columns.map((column) => (
                            <MenuItem value={column.accessor}>
                              {column.Header}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    <div style={{ margin: "1rem" }}>
                      <FormControl fullWidth>
                        <InputLabel id='select-label'>
                          Format Options
                        </InputLabel>
                        <Select
                          labelId='select-label'
                          id='simple-select'
                          value={selectedFormat}
                          label='Format Options'
                          onChange={handleFormat}
                        >
                          {/* placing the format options available for each column */}
                          {config[selectedColumn]?.map((val) => (
                            <MenuItem value={val}>{val}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    <div className='row'>
                      <div className='col-lg-4 ms-3 mt-3'>
                        <form onSubmit={handleRemove}>
                          <button className='btn btn-danger'>
                            <Typography
                              variant='button'
                              display='block'
                            >
                              Remove File
                            </Typography>
                          </button>
                        </form>
                      </div>
                      <div className='col-lg-4 mt-3'>
                        <form>
                          <button
                            className='btn btn-outline-success'
                            onClick={handleDownload}
                          >
                            <Typography
                              variant='button'
                              display='block'
                            >
                              Download File
                            </Typography>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* end of actions component */}
                  {/* start of react table component */}
                  <div className='col-lg-7'>
                    <ReactTable
                      rowData={rows}
                      columnData={columns}
                    />
                  </div>
                  {/* end of react table component */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // if file is not uploaded or removed then display this to the user.
        <div className='d-flex'>
          <i className='mt-1'>
            <CiWarning />
          </i>
          <Typography
            variant='overline'
            gutterBottom
            className='ms-1'
            style={{ marginTop: "4px" }}
          >
            No File Uploaded
          </Typography>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
