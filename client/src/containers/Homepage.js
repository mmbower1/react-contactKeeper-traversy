import React from "react";
import Contacts from "../components/Contacts";

const Homepage = () => {
  return (
    <div className="grid-2">
      <div>{/* contact form */}</div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Homepage;
