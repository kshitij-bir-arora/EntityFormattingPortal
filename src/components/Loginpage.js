import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Slideshow from "./Slideshow";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Loginpage = ({ Authenticated, setAuthenticated }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // set the state for success and eror message
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  //set the navigate method to navigate to homepage upon successfully logging in
  const navigate = useNavigate();

  // reference method
  const userRef = useRef("");

  // set a timeout for the response reeived to the login page
  const timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  // create method to act on submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // calling the api from server inside try catch block
    try {
      const resp = await axios.post("http://localhost:8081/api/auth/login", {
        email,
        password,
      });
      sessionStorage.setItem("token", resp.data.token);
      sessionStorage.setItem("email", resp.data.email);
      setAuthenticated(true);
    } catch (error) {
      setSuccess("");
      if (error.resp) {
        toast.error(error.resp.data.message);
      } else {
        toast.error("Error: Unexpected Error");
      }
      setAuthenticated(false);
      return;
    }
    // reset the details on the form
    setEmail("");
    setPassword("");
    setError("");
    toast.success("Sign in successful");
    await timeout(1000);
    navigate("/home");
  };

  useEffect(() => {
    setSuccess("");
  }, [email, password]);

  return (
    <>
      <section class='h-100 gradient-form'>
        <ToastContainer />
        <div class='container py-5 h-100'>
          <div class='row d-flex justify-content-center align-items-center h-100'>
            <div class='col-xl-10'>
              <div className='card rounded-3 text-black'>
                <div className='row g-0'>
                  <div className='col-lg-6'>
                    <div className='card-body p-md-5 mx-md-4'>
                      <div className='text-center'>
                        <h3 className='mt-1 mb-4 pb-1'>Welcome!</h3>
                      </div>
                      {/* calling login component */}
                      <Login
                        // props drilling from parent component to child component
                        userRef={userRef}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleSubmit={handleSubmit}
                      />
                    </div>
                  </div>
                  {/* calling slideshow component */}
                  <Slideshow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loginpage;
