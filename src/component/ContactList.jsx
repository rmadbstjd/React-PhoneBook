import React from 'react';
import ContactItem from './ContactItem';
import SearchBox from './SearchBox';
const ContactList = () => {
    return (
        <div>
            <SearchBox></SearchBox>
            <ContactItem></ContactItem>
        </div>
    );
};

export default ContactList;