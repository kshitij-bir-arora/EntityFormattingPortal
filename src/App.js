import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import Loginpage from "./components/Loginpage";
import Header from "./components/Header";
import { ToastContainer } from "react-bootstrap";
import Homepage from "./components/Homepage";
import PrivateRoutes from "./utils/PrivateRoutes";
import SideBar from "./TestC/SideBar";
import Test from "./TestC/Test";
import FileInputForm from "./TestC/FileInputForm";
import FileFormActions from "./TestC/FileFormActions";

import { useState, useEffect } from "react";
import Base from "./components/Base";

function App() {
  const [Authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("token") !== null) {
      setAuthenticated(true);
    }
  }, []);
  return (
    <>
      <SideBar />
      {/* <Router>
        <Routes>
          <Route
            path='/'
            element={
              <Homepage
                children={
                  <Loginpage
                    Authenticated={Authenticated}
                    setAuthenticated={setAuthenticated}
                  />
                }
              />
            }
          />
          <Route
            path='/signup'
            element={
              <Homepage
                children={
                  <SignUpPage
                    Authenticated={Authenticated}
                    setAuthenticated={setAuthenticated}
                  />
                }
              />
            }
          />
          <Route
            path='/home'
            element={<Homepage children={<FileInputForm />} />}
          />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
