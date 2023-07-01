import React,{useState, useEffect} from "react";
import {v4} from 'uuid';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  
const  LOCAL_STORAGE_KEY = "contacts";

const [contacts,setContacts] = useState([]);

const addContactHandler = (contact) => {
  console.log(" in addContact fn : ",contact);
  setContacts([...contacts, {id: v4(), ...contact}]); 
  //DATA STRUCTURE : [ "id": "", "contact": {"name":"" "email":""}]
};

const removeContactHandler = (id) => {
  const newContactList = contacts.filter((contact)=>{
   return contact.id !== id;
  });
  setContacts(newContactList);
}

useEffect(() => { 
  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if(retrieveContacts != 0) setContacts(retrieveContacts);
},[]);

useEffect(() => { 
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
},[contacts]);



  return (
    <div className="ui space container">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId = {removeContactHandler}/>
    </div>
  );
}

export default App;
