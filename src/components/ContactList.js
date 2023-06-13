import React from "react";
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log("props:",props);

    const renderContactList = props.contacts.map((contact)=>{
        console.log("contact",contact);
        return (
            <ContactCard contact={contact}/>
        )
    });
    return(
        <div className="ui celled list">
            {renderContactList} 
        </div>
    );

};

export default ContactList;