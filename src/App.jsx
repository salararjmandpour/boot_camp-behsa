//*>--------- Import 
import './App.css'
import React, { useState } from 'react';
import { Button, Container, Form, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  //*>--------- create state to store names 

  const [names, setNames] = useState([]);

  //*>--------- create state to store randomly 

  const [randomName, setRandomName] = useState(null);

  //*>--------- create method to handle name submission

  const handleAddName = (e) => {
    e.preventDefault();
    const newName = e.target.elements.name.value.trim();

    if (newName) {
      setNames([...names, newName]);
      e.target.elements.name.value = '';
    }
  };

  //*>--------- create method to handle random name 

  const handleRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setRandomName(names[randomIndex]);
  };

  return (
    <>
    <Container className="mt-4" dir='rtl'>
      <h1>Project for BootCamp Behsa</h1>

      {/*>--- Form to add names ---<*/}

      <Form onSubmit={handleAddName} className="mb-3">
        <Form.Group controlId="formName">
          <Form.Label>یک نام وارد کنید :</Form.Label>
          <Form.Control type="text" name="name" placeholder="نام" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          اضافه کردن نام
        </Button>
      </Form>

      {/*>--- List of entered names ---<*/}

      <h2>لیست نام های وارد شده :</h2>
      <ListGroup>
        {names.map((name, index) => (
          <ListGroup.Item key={index}>{name}</ListGroup.Item>
        ))}
      </ListGroup>

      {/*>--- pick a random name ---<*/}

      <Button variant="success" onClick={handleRandomName} className="mt-3">
      نام تصادفی را انتخاب کنید
      </Button>

      {/*>--- randomly selected name ---<*/}

      {randomName && (
        <div className="mt-3">
          <h2>نام انتخاب شده به صورت تصادفی :</h2>
          <p>{randomName}</p>
        </div>
      )}
      
    </Container>
    </>
  );
};

export default App;