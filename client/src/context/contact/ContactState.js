import React, { useReducer } from "react";
// import uuid from "uuid";
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
    current: null,
    filtered: null,
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // add contact
  const addContact = (contact) => {
    // contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // delete contact
  const deleteContact = (id) => {
    // contact.id = uuid.v4();
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // set current contact
  const setCurrent = (contact) => {
    // contact.id = uuid.v4();
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // clear current contact
  const clearCurrent = () => {
    // contact.id = uuid.v4();
    dispatch({ type: CLEAR_CURRENT }); // no payload since its being set back to null
  };
  // update contact
  const updateContact = (contact) => {
    // contact.id = uuid.v4();
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  // filter contact
  const filterContacts = (text) => {
    // contact.id = uuid.v4();
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  // clear filter
  const clearFilter = () => {
    // contact.id = uuid.v4();
    dispatch({ type: CLEAR_FILTER }); // no payload since its being set back to null
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        updateContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
