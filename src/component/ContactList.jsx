import React, {useState} from 'react';
import ContactItem from './ContactItem';
import SearchBox from './SearchBox';
import {useSelector} from 'react-redux';
import { useEffect } from 'react';

const ContactList = () => {
    const {contactList, keyword,first} = useSelector((state) => state);
    const [list, setList] = useState([]);
    
    

    useEffect(() => {
        setList(contactList);
    },[first]);

    useEffect(() => {
        
        if(keyword !=='') {
            setList(contactList.filter((item) => item.name.includes(keyword)));
        }
        else {
            setList(contactList);
        }
        
    },[keyword]);
   
    return (
        <div>
            <SearchBox></SearchBox>
            <div>{list && list.map((item) => <ContactItem item={item}></ContactItem>)}</div>
           
        </div>
    );
};

export default ContactList;