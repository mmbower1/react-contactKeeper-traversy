import React, { useContext, useEffect, useRef } from "react";
import ContactContext from "../context/contact/ContactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { clearFilter, filterContacts, filtered } = contactContext;
  const text = useRef("");

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  return (
    <form>
      <input
        type="text"
        ref={text}
        placeholder="Filter contacts..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
