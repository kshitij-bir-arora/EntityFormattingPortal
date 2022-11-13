import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LogOut = ({ setAuthenticated }) => {
  const navigate = useNavigate("");
  const handleClick = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("email");
    setAuthenticated(false);
    navigate("/");
  };
  return (
    <form
      className='d-flex ms-auto'
      style={{ marginRight: "1em" }}
      onSubmit={handleClick}
    >
      <button className='btn btn-outline-light'>Logout</button>
    </form>
  );
};

export default LogOut;
