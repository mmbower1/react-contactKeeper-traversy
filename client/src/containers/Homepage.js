import React from "react";
// components
import Contacts from "../components/Contacts";
import ContactForm from "../components/ContactForm";
import ContactFilter from "../components/ContactFilter";

const Homepage = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Homepage;
