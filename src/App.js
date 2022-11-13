import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import Loginpage from "./components/Loginpage";
import Homepage from "./components/Homepage";
import UserDashboard from "./components/UserDashboard";

function App() {
  const [Authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("token") !== null) {
      setAuthenticated(true);
    }
  }, []);
  return (
    <>
      <Router>
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
            element={
              <Homepage
                Authenticated={Authenticated}
                setAuthenticated={setAuthenticated}
                children={<UserDashboard Authenticated={Authenticated} />}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
