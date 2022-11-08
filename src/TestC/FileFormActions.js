import React from "react";

const FileFormActions = () => {
  return (
    <div className='col-md-2 bg-light card-body'>
      <h4>Actions</h4>
      <hr />
      <h4>Edit File</h4>
      <form>
        <div className='form-group row'>
          <label
            for='parent-category'
            className='col-12 col-form-label'
          >
            Column Name
          </label>
          <div className='col-12'>
            <select
              className='form-select'
              aria-label='Default select example'
            >
              <option selected>Open this select menu</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
        </div>
        <div className='form-group row'>
          <label
            for='parent-category'
            className='col-12 col-form-label'
          >
            Format
          </label>
          <div className='col-12'>
            <select
              className='form-select'
              aria-label='Default select example'
            >
              <option selected>Open this select menu</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
        </div>
        <div style={{ marginTop: "6rem", alignItems: "center" }}>
          <button className='btn btn-outline-primary btn-md'>
            Apply Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default FileFormActions;
