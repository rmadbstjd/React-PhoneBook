import React from 'react';
import {Form, Button} from 'react-bootstrap';
const ContactForm = () => {
    return (
        <div>
            <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해주쇼" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력해주쇼" />
      </Form.Group>

      <Button variant="primary" type="submit">
        저장하기
      </Button>
    </Form>
        </div>
    );
};

export default ContactForm;