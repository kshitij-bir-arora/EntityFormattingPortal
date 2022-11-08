import React, { useState, useEffect } from "react";
import "./FileInputForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const FileInputForm = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:8081/api/files/upload";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <>
      <div>
        <div>
          <div class='form-group'>
            <input
              class='form-control'
              name='file'
              onChange={handleChange}
              type='file'
              accept='.csv'
            />
          </div>
          {file && (
            <div class='form-group'>
              <button
                class='btn btn-dark'
                onClick={handleSubmit}
                type='submit'
              >
                Upload
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FileInputForm;
