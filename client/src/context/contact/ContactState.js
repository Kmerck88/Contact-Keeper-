import React, { useReducer } from 'react';
<<<<<<< HEAD
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  GET_CONTACTS,
 ADD_CONTACT,
=======
import uuid from 'uuid';
import { ContactContext } from './contactContext';
import { contactReducer } from './contactReducer';
import {
  Add_CONTACT,
>>>>>>> 087c3e111e0f389a3f9a8381d37edf4f644326b0
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
<<<<<<< HEAD
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR
=======
  CLEAR_FILTER
>>>>>>> 087c3e111e0f389a3f9a8381d37edf4f644326b0
} from '../types';

const ContactState = props => {
  const initialState = {
<<<<<<< HEAD
    contacts: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Get Contacts
  const getContacts = async () => {
    try {
      const res = await axios.get('/api/contacts');

      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Contact
  const addContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/contacts', contact, config);

      dispatch({
        type: ADD_CONTACT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  };
  
  // Delete Contact
  const deleteContact = async id => {
    try {
      await axios.delete(`/api/contacts/${id}`);
      
      dispatch({
        type: DELETE_CONTACT,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  };
  
  // Clear Contacts
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
  };
  
  // Update Contact
  const updateContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );

      dispatch({
        type: UPDATE_CONTACT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  };


  // Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        getContacts,
        clearContacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
=======
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail',
        phone: '313-777-9311',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Kyle Johnson',
        email: 'kyle@gmail',
        phone: '313-773-9351',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Kevin Merck',
        email: 'Kevin@gmail',
        phone: '313-555-9611',
        type: 'personal'
      }
    ]
  };
  
  const [state, dispatch]= useReducer(contactReducer, initialState); 

// ADD Contact 

// Delete Contact 

// Set Current Contact 

//Clear Current Contact

// Update Contact 

//Filter Contacts 

// Clear Filter 

return (
  <ContactContext.Provider
  value={{
    contacts: state.contacts
  }}>
{props.children}
  </ContactContext.Provider>
)
>>>>>>> 087c3e111e0f389a3f9a8381d37edf4f644326b0
};

export default ContactState;