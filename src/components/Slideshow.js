import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/LoginPage.css";

const Slideshow = () => {
  return (
    <div class='col-lg-6 d-flex align-items-center gradient-custom-2'>
      <div class='text-white px-3 py-4 p-md-5 mx-md-4'>
        <h4 class='mb-4'>This is an entity formatting portal</h4>
        <p class='small mb-0'>
          We are focused on allowing our users to upload and format the key
          attributes in their CSV/JSON format file, to allow for better
          efficiency and interpretation of their data
        </p>
      </div>
    </div>
  );
};

export default Slideshow;
