import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./component/ContactForm";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import ContactList from "./component/ContactList";
import SearchBox from "./component/SearchBox";
function App() {
  return (
    <div>
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm></ContactForm>
          </Col>
          <Col>
            <ContactList></ContactList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
