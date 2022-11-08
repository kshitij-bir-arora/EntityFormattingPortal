import React from "react";
import Header from "./Header";

const Base = ({ child }) => {
  return (
    <section class=''>
      {/* <!-- Jumbotron --> */}
      <div class='px-4 py-5 px-md-5 text-center text-lg-start'>
        <div class='container'>
          <div class='row gx-lg-5 align-items-center'>
            <div class='col-lg-6 mb-5 mb-lg-0'>
              <h1 class='my-5 display-3 fw-bold ls-tight'>
                The best offer <br />
                <span class='text-primary'>for your business</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </div>

            <div class='col-lg-6 mb-5 mb-lg-0'>
              <div class='card'>
                <div class='card-body py-5 px-md-5'>
                  <form>
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <div class='row'>
                      <div class='col-md-6 mb-4'>
                        <div class='form-outline'>
                          <input
                            type='text'
                            id='form3Example1'
                            class='form-control'
                          />
                          <label
                            class='form-label'
                            for='form3Example1'
                          >
                            First name
                          </label>
                        </div>
                      </div>
                      <div class='col-md-6 mb-4'>
                        <div class='form-outline'>
                          <input
                            type='text'
                            id='form3Example2'
                            class='form-control'
                          />
                          <label
                            class='form-label'
                            for='form3Example2'
                          >
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Email input --> */}
                    <div class='form-outline mb-4'>
                      <input
                        type='email'
                        id='form3Example3'
                        class='form-control'
                      />
                      <label
                        class='form-label'
                        for='form3Example3'
                      >
                        Email address
                      </label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div class='form-outline mb-4'>
                      <input
                        type='password'
                        id='form3Example4'
                        class='form-control'
                      />
                      <label
                        class='form-label'
                        for='form3Example4'
                      >
                        Password
                      </label>
                    </div>

                    {/* <!-- Checkbox --> */}
                    <div class='form-check d-flex justify-content-center mb-4'>
                      <input
                        class='form-check-input me-2'
                        type='checkbox'
                        value=''
                        id='form2Example33'
                        checked
                      />
                      <label
                        class='form-check-label'
                        for='form2Example33'
                      >
                        Subscribe to our newsletter
                      </label>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                      type='submit'
                      class='btn btn-primary btn-block mb-4'
                    >
                      Sign up
                    </button>

                    {/* <!-- Register buttons --> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Base;