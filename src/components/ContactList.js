import React, {useRef} from "react";
import ContactCard from "./ContactCard";
import {FaSearch, FaAccessibleIcon} from 'react-icons/fa';

const ContactList = (props) => {
   const inputEl = useRef("");

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
    <ContactCard contact={contact} 
    clickHander={deleteConactHandler} 
    key={contact.id} />
    );
  });

  const getSearchTerm = () =>{
       props.searchKeyword(inputEl.current.value)
  }
  return(
    <div className="list ph5 pv1 p10">
    <input type="text" ref={inputEl}  placeholder="Search Contact" className="bar mb3 br2" 
    value={props.term} onChange={getSearchTerm}/>    
    <FaSearch className="ph2"/>
    <h1 className="f3">Saved Contact</h1>
    {renderContactList.length > 0 ? renderContactList : "No contact found"}
   </div>
  ); 
};



export default ContactList;
