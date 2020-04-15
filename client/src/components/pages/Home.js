<<<<<<< HEAD
import React, { useContext, useEffect} from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'; 
import ContactFilter from '../contacts/ContactFilter'
import AuthContext from '../../context/auth/authContext'

const Home = () => {
 const authContext= useContext(AuthContext);  

 useEffect(() => {
   authContext.loadUser(); 
 // eslint-disable-next-line
  }, [])

  return (
    <div className="grid-2">
    <div>
      <ContactForm />
    </div>
    <div>
      <ContactFilter />
      <Contacts />
    </div>
=======
import React from 'react'

const Home = () => {
  return (
    <div>
    <h1>Home</h1>
>>>>>>> 087c3e111e0f389a3f9a8381d37edf4f644326b0
    </div>
  )
}

export default Home;
