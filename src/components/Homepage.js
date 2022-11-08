import React from "react";
import Header from "./Header";

const Homepage = ({ children }) => {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
};

export default Homepage;
