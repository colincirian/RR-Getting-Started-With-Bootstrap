import "./App.css";
import Button from "react-bootstrap/button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

function App() {
  return (
    <div className="App">
      <h1>Bootstrap Website</h1>

      <Nav activeKey={"/home"}>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address:</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
          <Form.Text className="text-muted">
            We'll probably share your email with the CIA
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Submit my data to the NSA too" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Favorite brand of shaving cream.</Form.Label>
          <Form.Control as='select'>
            <option>Brill Cream</option>
            <option>Herbal Essence</option>
            <option>Old Spice</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary">Submit Form</Button>
      </Form>
    </div>
  );
}

export default App;
