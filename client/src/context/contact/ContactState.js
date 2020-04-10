import React, { useReducer} from 'react'; 
import uuid from 'uuid'; 
import ContactContext from "./contactContext"; 
import contactReducer from "./contactReducer"; 
import {  
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT, 
    FILTER_CONTACTS, 
    CLEAR_FILTER ,
    } from "../types";


    const ContactState = props =>{
        const initialState = {
            contacts: [
                {
                    id: 1, 
                    name: "Jill Keys",
                    email:"jillk@gmail.com", 
                    phone:"313-777-9311",
                    type: "personal"
                },
                {
                    id: 2, 
                    name: " Calvin Keys",
                    email:"calk@gmail.com", 
                    phone:"313-745-9311",
                    type: "personal"
                },
                {
                    id: 3, 
                    name: "Ki Keys",
                    email:"Kik@gmail.com", 
                    phone:"313-787-4511",
                    type: "professional"
                }
             ],
             current: null, 
             filtered: null
        };
        const [state, dispatch] = useReducer(contactReducer, initialState); 

        // Add Contact 

        const addContact = contact=> {
            contact.id = uuid.v4(); 
            dispatch({ type: ADD_CONTACT, payload: contact }); 
        };
        

        // Delete Contact 
            const deleteContact = id => {
            dispatch({ type: DELETE_CONTACT, payload: id }); 
        }
        
        // Set Current Contact 
        const setCurrent =  contact  => {
            dispatch({ type: SET_CURRENT, payload: contact }); 
        }
        
        // Clear Current Contact 
        const clearCurrent = () => {
            dispatch({ type: CLEAR_CURRENT }); 
            }


         // Update Contact
            const updateContact = contact => { 
          dispatch ({type: UPDATE_CONTACT, payload: contact})
            }; 
            
       
            //Filter Contacts 
          
        const filterContacts = text => { 
            dispatch ({type: FILTER_CONTACTS, payload: text})
        };
        //Clear Filter 
        const clearfilter = () => { 
            dispatch ({type: CLEAR_FILTER})
        };
   
   
   
   
        return ( 
       <ContactContext.Provider
       value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact, 
        deleteContact,
        setCurrent, 
        clearCurrent, 
        updateContact,
        filterContacts, 
        clearfilter
       }}>
        { props.children}

       </ContactContext.Provider>
   )
    };

    export default ContactState;
