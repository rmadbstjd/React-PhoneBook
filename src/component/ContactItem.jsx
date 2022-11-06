import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {FaUser} from 'react-icons/fa';
const ContactItem = () => {
    return (
        <Row>
            <Col lg={2}>
                <FaUser size="40"></FaUser>
            </Col>
            <Col lg={10}>
                <p>윤성</p>
                <p>01030113421</p>
            </Col>
        </Row>
            
        
    );
};

export default ContactItem;