import React from "react";
import SignUp from "./SignUp";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Features from "./Features";

const NAME_REGEX = /\b([a-zA-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const EMAIL_REGEX = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

const SignUpPage = ({ Authenticated, setAuthenticated }) => {
  const AccountRef = useRef();

  // write a state for valid first name
  const [firstName, setFirstName] = useState("");
  const [validFname, setValidFName] = useState(false);
  const [fnameFocus, setFnameFocus] = useState(false);

  // state for valid last name
  const [lastName, setLastName] = useState("");
  const [validLname, setValidLName] = useState(false);
  const [lnameFocus, setLnameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  useEffect(() => {
    const result = NAME_REGEX.test(firstName);
    setValidFName(result);
  }, [firstName]);

  useEffect(() => {
    const result = NAME_REGEX.test(lastName);
    setValidLName(result);
  }, [lastName]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPassword(result);
    const match = password === matchPwd;
    setValidMatch(match);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [firstName, lastName, email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // data validate
    // if for some reason the button was enabled again
    const v1 = NAME_REGEX.test(firstName);
    const v2 = NAME_REGEX.test(lastName);
    const v3 = PWD_REGEX.test(password);
    const v4 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v3 || !v4) {
      setErrMsg("Invalid Entry");
      return;
    }
    // // add server api
    try {
      // get response from the api
      const resp = await axios.post("http://localhost:8081/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      // set the token
      sessionStorage.setItem("token", resp.data.token);
      // sending the email value with the token
      sessionStorage.setItem("email", resp.data.email);
      setAuthenticated(true);
      toast.success("Registered!");
    } catch (error) {
      setSuccessMsg("");
      if (error.resp) {
        setErrMsg(error.resp.data.message);
      } else {
        setErrMsg("Error: Unexpected Error");
      }
      setAuthenticated(false);
      toast.error("Error: Registration Failed!");
      return;
    }
    // clear input fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setMatchPwd("");

    // err message to null
    setErrMsg("");

    await timeout(1000);
    navigate("/");
  };

  useEffect(() => {
    setSuccessMsg("");
  }, [firstName, lastName, email, password]);

  return (
    <section class='h-100 gradient-form'>
      <ToastContainer />
      <div class='container py-5 h-100 mb-2'>
        <div class='row d-flex justify-content-center align-items-center h-100'>
          <div class='col-xl-10'>
            <SignUp
              AccountRef={AccountRef}
              handleSubmit={handleSubmit}
              firstName={firstName}
              lastName={lastName}
              email={email}
              password={password}
              matchPwd={matchPwd}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setEmail={setEmail}
              setPassword={setPassword}
              setMatchPwd={setMatchPwd}
              validFname={validFname}
              validLname={validLname}
              validEmail={validEmail}
              validPassword={validPassword}
              validMatch={validMatch}
              fnameFocus={fnameFocus}
              lnameFocus={lnameFocus}
              emailFocus={emailFocus}
              passwordFocus={passwordFocus}
              matchFocus={matchFocus}
              setFnameFocus={setFnameFocus}
              setLnameFocus={setLnameFocus}
              setEmailFocus={setEmailFocus}
              setPasswordFocus={setPasswordFocus}
              setMatchFocus={setMatchFocus}
            />
          </div>
        </div>
      </div>
      <Features />
    </section>
  );
};

export default SignUpPage;
