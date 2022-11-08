import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Features = () => {
  return (
    <section
      id="Features"
      style={{
        padding: "4% 15%",
        background: "#fccb90",
        background:
          "-webkit-linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
        background:
          "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
      }}
    >
      <div class="row">
        <div class="feature-box col-lg-4">
          <div class="card" style={{ backgroundColor: "#FCF6F5FF" }}>
            <div class="card-body text-center">
              <h3 class="fw-bold">Easy to use.</h3>
              <p style={{ color: "#8f8f8f" }}>
                Allowing ease of use through our minimalist UI.
              </p>
            </div>
          </div>
        </div>
        <div class="feature-box col-lg-4">
          <div class="card" style={{ backgroundColor: "#FCF6F5FF" }}>
            <div class="card-body text-center">
              <h3 class="fw-bold">Trustworthy</h3>
              <p style={{ color: "#8f8f8f" }}>
                Allowing ease of use through our minimalist UI.
              </p>
            </div>
          </div>
        </div>
        <div class="feature-box col-lg-4">
          <div class="card" style={{ backgroundColor: "#FCF6F5FF" }}>
            <div class="card-body text-center">
              <h3 class="fw-bold">Efficient.</h3>
              <p style={{ color: "#8f8f8f" }}>
                Allowing ease of use through our minimalist UI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
