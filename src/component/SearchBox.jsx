import React, {useState} from 'react';
import {Row,Col,Form,Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
const SearchBox = () => {
    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch();
    const searchName = (e) => {
       
        e.preventDefault();
        
        dispatch({type: "SEARCH", payload : {keyword}})
        setKeyword('');
    };
    return (
        <Form onSubmit={searchName}>
            검색
            <Row>
            
                <Col lg ={10}>
                    <Form.Control value={keyword} type="text" placeholder="이름을 입력해주쇼" onChange={(e)=>setKeyword(e.target.value)}></Form.Control>
                </Col>
                <Col lg={2}>
                    <Button  variant="primary" type="submit">찾기</Button>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchBox;