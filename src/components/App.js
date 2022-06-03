import React,{useEffect, useState} from 'react';   
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
function App() {
 const LOCAL_STORAGE_KEY='contacts';

  const [contacts,setContacts]=useState([]);//empty

  const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,{id:uuid(), ...contact}])
  }
  useEffect(()=>{
    const retrieveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setContacts(retrieveContacts);
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
 

  const removeContactHandler=(id) =>{
    const newContactList=contacts.filter((contact)=>{
      return contact.id !==id;
    });
    setContacts(newContactList);
  }
 

 
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
