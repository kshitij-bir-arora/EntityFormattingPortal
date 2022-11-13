import React from "react";
import Header from "./Header";

const Homepage = ({ children, Authenticated, setAuthenticated }) => {
  return (
    <section>
      <Header
        Authenticated={Authenticated}
        setAuthenticated={setAuthenticated}
      />
      {children}
    </section>
  );
};

export default Homepage;
