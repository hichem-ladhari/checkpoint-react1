import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Form  id='container' >
      <Form.Group className="mb-3" id='form-group' controlId="formBasicEmail">
        <Form.Label>FullName</Form.Label>
        <Form.Control type="name" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" id='form-group' controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3"  id='form-group' controlId="formBasicPassword">
        <Form.Label>address</Form.Label>
        <Form.Control type="address" placeholder="address" />
      </Form.Group>
      <Button variant="primary" id='btn' type="submit">
        Submit
      </Button>
    </Form>
      </header>
    </div>
  );
}

export default App;
