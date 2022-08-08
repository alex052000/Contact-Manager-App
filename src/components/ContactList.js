import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
    <ContactCard contact={contact} clickHander={deleteConactHandler} key={contact.id} />
    );
  });
  return(
    <div className="list ph5 pv1 p10">
    <h1 className="f3">Saved Contact</h1>
    {renderContactList}
   </div>
  ); 
};



export default ContactList;
