import React from "react";
import Login from "./Login";
import Slideshow from "./Slideshow";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginPage.css";
import SignUp from "./SignUp";

const EntryCard = () => {
  return (
    <section className='h-100 gradient-form'>
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-xl-10'>
            <div className='card rounded-3 text-black'>
              <div className='row g-0'>
                <div className='col-lg-6'>
                  <div className='card-body p-md-5 mx-md-4'>
                    <div className='text-center'>
                      <div className='text-center'>
                        <h3 className='mt-1 mb-4 pb-1'>Welcome!</h3>
                      </div>
                      <Login />
                    </div>
                  </div>
                </div>
                {/* insert slideshow component here */}
                <Slideshow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntryCard;
