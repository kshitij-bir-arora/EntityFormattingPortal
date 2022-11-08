import React, { useState, useRef, useEffect } from "react";
import Slideshow from "./Slideshow";
import "./SignUp.css";
import { FaInfoCircle, FaCheck, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  return (
    <div className='card rounded-3 text-black'>
      <div className='row g-0'>
        <div className='col-lg-6'>
          <div className='card-body p-md-2 mx-md-2'>
            <div className='text-center'>
              <h3 className='mt-1 mb-4 pb-1'>Sign Up</h3>
            </div>
            <form onSubmit={props.handleSubmit}>
              {/* create input for firstname and last name */}
              <div className='row g-0 mb-4'>
                <div
                  className='col form'
                  style={{ marginRight: "1rem" }}
                >
                  <label
                    htmlFor='fname'
                    className='form-label'
                  >
                    First Name:
                    <span className={props.validFname ? "valid" : "hide"}>
                      <FaCheck />
                    </span>
                    <span
                      className={
                        props.validFname || !props.firstName
                          ? "hide"
                          : "invalid"
                      }
                    >
                      <FaTimes />
                    </span>
                  </label>
                  <input
                    id='fname'
                    name='firstName'
                    type='text'
                    className='form-control'
                    placeholder='First name'
                    ref={props.AccountRef}
                    value={props.firstName}
                    onChange={(e) => props.setFirstName(e.target.value)}
                    autoComplete='off'
                    required
                    aria-invalid={props.validFname ? "false" : "true"}
                    aria-describedby='fnamenote'
                    onFocus={() => props.setFnameFocus(true)}
                    onBlur={() => props.setFnameFocus(false)}
                  />
                  {/* error note */}
                  <p
                    id='fnamenote'
                    className={
                      props.fnameFocus && props.firstName && !props.validFname
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FaInfoCircle />
                    FirstName must be minimum 4 characters <br />
                  </p>
                  {/* error note end */}
                </div>
                {/* last name field */}
                <div className='col form'>
                  {/* last name label */}
                  <label
                    htmlFor='lname'
                    className='form-label'
                  >
                    Last Name:
                    <span className={props.validLname ? "valid" : "hide"}>
                      <FaCheck />
                    </span>
                    <span
                      className={
                        props.validLname || !props.lastName ? "hide" : "invalid"
                      }
                    >
                      <FaTimes />
                    </span>
                  </label>
                  {/* end of last name label */}
                  {/* last name input */}
                  <input
                    id='lname'
                    name='lastName'
                    type='text'
                    className='form-control'
                    autoComplete='off'
                    placeholder='Last Name'
                    ref={props.AccountRef}
                    value={props.lastName}
                    onChange={(e) => props.setLastName(e.target.value)}
                    required
                    aria-invalid={props.validLname ? "false" : "true"}
                    aria-describedby='lnamenote'
                    onFocus={() => props.setLnameFocus(true)}
                    onBlur={() => props.setLnameFocus(false)}
                  />
                  {/* start of last name note */}
                  <p
                    id='lnamenote'
                    className={
                      props.lnameFocus && props.lastName && !props.validLname
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FaInfoCircle />
                    LastName must be minimum 4 characters <br />
                  </p>
                  {/* end of last name note */}
                </div>
                {/* end of last name component */}
              </div>

              {/* create email address input */}
              <div class='form mb-4'>
                <label
                  class='form-label'
                  htmlFor='emailAddress'
                >
                  Email Address
                </label>
                <input
                  id='emailAddress'
                  name='email'
                  value={props.email}
                  type='email'
                  className='form-control'
                  placeholder='Email Address'
                  required
                  autoComplete='off'
                  onChange={(e) => props.setEmail(e.target.value)}
                />
              </div>
              {/* end of email address Input */}

              {/* create password input */}
              <div class='form mb-4'>
                {/* password label */}
                <label
                  class='form-label'
                  htmlFor='pass'
                >
                  Password:
                  <span className={props.validPassword ? "valid" : "hide"}>
                    <FaCheck />
                  </span>
                  <span
                    className={
                      props.validPassword || !props.password
                        ? "hide"
                        : "invalid"
                    }
                  >
                    <FaTimes />
                  </span>
                </label>
                {/* end of password label */}
                <input
                  id='pass'
                  name='password'
                  value={props.password}
                  type='password'
                  className='form-control'
                  placeholder='password'
                  ref={props.AccountRef}
                  onChange={(e) => props.setPassword(e.target.value)}
                  required
                  aria-invalid={props.validPassword ? false : true}
                  aria-describedby='PassNote'
                  onFocus={() => props.setPasswordFocus(true)}
                  onBlur={() => props.setPasswordFocus(false)}
                />
                <p
                  id='PassNote'
                  className={
                    props.passwordFocus && !props.validPassword
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <FaInfoCircle />
                  Password must be minimum 8 characters
                  <br />
                  It must contain a special character
                  <br />
                  It must contain a number <br />
                </p>
              </div>
              {/* end of password field */}
              {/* create match password input */}
              <div class='form mb-4'>
                <label
                  class='form-label'
                  htmlFor='repeatpass'
                >
                  Confirm Password:
                  <span
                    className={
                      props.validMatch && props.matchPwd ? "valid" : "hide"
                    }
                  >
                    <FaCheck />
                  </span>
                  <span
                    className={
                      props.validMatch || !props.matchPwd ? "hide" : "valid"
                    }
                  >
                    <FaTimes />
                  </span>
                </label>
                <input
                  id='repeatpass'
                  name='matchPwd'
                  value={props.matchPwd}
                  type='password'
                  ref={props.AccountRef}
                  className='form-control'
                  placeholder='Re-enter Password'
                  onChange={(e) => props.setMatchPwd(e.target.value)}
                  required
                  aria-invalid={props.validMatch ? false : true}
                  aria-describedby='MatchPassNote'
                  onFocus={() => props.setMatchFocus(true)}
                  onBlur={() => props.setMatchFocus(false)}
                />
                <p
                  id='MatchPassNote'
                  className={
                    props.matchFocus && !props.validMatch
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <FaInfoCircle />
                  Must match the password from password field <br />
                </p>
              </div>
              {/* end of match password field */}

              {/* create checkbox for terms and conditions */}
              <div class='form-check d-flex justify-content-center mb-4'>
                <input
                  className='form-check-input me-2'
                  type='checkbox'
                  value=''
                  id='registerCheck'
                  checked
                  aria-describedby='registerCheckHelpText'
                />
                <label
                  className='form-check-label'
                  htmlFor='registerCheck'
                >
                  I have read and agree to the terms
                </label>
              </div>

              {/* create submit button */}
              <div class='text-center pt-1 mb-2'>
                <button
                  className='btn btn-outline-danger btn-block fa-lg mb-3'
                  disabled={
                    !props.validFname ||
                    !props.validLname ||
                    !props.validPassword ||
                    !props.validMatch
                  }
                >
                  Submit
                </button>
              </div>
            </form>
            <div class='d-flex justify-content-center'>
              <span className='mt-1 mx-2'>Registered user?</span>
              <Link to='/'>
                <button className='btn btn-outline-primary btn-sm'>
                  Log in
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Slideshow />
      </div>
    </div>
  );
};

export default SignUp;
