import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";

// accepting props from parent component
const Login = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <p>Please Login to your Account</p>
        <div className='form-floating mb-4'>
          {/* input email address */}
          <input
            className='form-control'
            id='emailAddress'
            type='email'
            placeholder='Email Address'
            ref={props.userRef}
            value={props.email}
            onChange={(e) => props.setEmail(e.target.value)}
            required
          />
          <label
            className='form-label'
            for='emailAddress'
          >
            EmailAddress
          </label>
        </div>
        <div className='form-floating mb-4'>
          {/* insert form input component */}
          <input
            className='form-control'
            id='pass'
            type='password'
            placeholder='Password'
            ref={props.userRef}
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
            required
          />
          <label
            className='form-label'
            for='pass'
          >
            Password
          </label>
        </div>
        <div className='text-center pt-1 mb-2'>
          <button className='btn btn-primary btn-block fa-lg mb-3'>
            Submit
          </button>
        </div>
        <div className='text-center mb-5 pb-1'>
          <a
            href='#'
            className='text-muted'
          >
            Forgot Password?
          </a>
        </div>
        <div className='d-flex align-items-center justify-content-center pb-4'>
          <p className='mb-0 me-2'>Don't have an account?</p>
          <Link to='/signup'>
            <button
              type='button'
              className='btn btn-outline-primary'
            >
              SignUp
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
