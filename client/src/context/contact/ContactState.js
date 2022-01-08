import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../Types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Mom",
        email: "mchap2337@gmail.com",
        phone: "530-219-7950",
        type: "personal",
      },
      {
        id: 2,
        name: "Dad",
        email: "bowerken@earthlink.net",
        phone: "530-753-8275",
        type: "personal",
      },
      {
        id: 3,
        name: "Jalen Hurts",
        email: "jalen@gmail.com",
        phone: "530-753-8275",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);
  // add contact
  // delete contact
  // set current contact
  // clear current contact
  // update contact
  // filter contact
  // clear filter
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
