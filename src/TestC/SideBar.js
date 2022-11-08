import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FileInputForm from "./FileInputForm";
import FileFormActions from "./FileFormActions";

const SideBar = () => {
  return (
    <section id='sidebar'>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand'>User Dashboard</a>
          <div className='d-flex'>
            <a
              href='#'
              className='btn btn-outline-light'
            >
              Log Out
            </a>
          </div>
        </div>
      </nav>
      <div
        className='container-fluid'
        style={{ marginTop: "50px" }}
      >
        <div className='row'>
          <div className='col-lg-12'>
            <div className='card'>
              <div className='card-body'>
                <div className='row'>
                  <FileFormActions />
                  <div className='col-lg-8'>
                    <FileInputForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
