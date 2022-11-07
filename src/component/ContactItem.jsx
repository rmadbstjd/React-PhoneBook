import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {FaUser} from 'react-icons/fa';
import {useSelector} from 'react-redux';
const ContactItem = ({item}) => {
    
    return (
        <Row>
            <Col lg={2}>
                <FaUser size="40"></FaUser>
            </Col>
            <Col lg={10}>
                <p>{item && item.name}</p>
                <p>{item && item.phoneNum}</p>
            </Col>
        </Row>
            
        
    );
};

export default ContactItem;