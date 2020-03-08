import React, { useReducer } from 'react';
import uuid from 'uuid';
import { ContactContext } from './contactContext';
import { contactReducer } from './contactReducer';
import {
  Add_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
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
};

export default ContactState;