import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum]  = useState('');
  const dispatch = useDispatch();
  const addContact = (e) => {
    e.preventDefault();
    dispatch({type:"ADD_CONTACT", payload:{name,phoneNum}});
    setName('');
    setPhoneNum('');
   
  };
    return (
        <div>
            <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control value={name}type="text" placeholder="이름을 입력해주쇼" onChange={(e) => setName(e.target.value)} />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>전화번호</Form.Label>
        <Form.Control value={phoneNum}type="number" placeholder="전화번호를 입력해주쇼" onChange={(e) => setPhoneNum(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        저장하기
      </Button>
    </Form>
        </div>
    );
};

export default ContactForm;