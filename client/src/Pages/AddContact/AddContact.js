import React, { useState } from 'react'
import { Button , Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { ajoutContact } from '../../JS/Actions/ContactActions';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
  const display ={"margin": "30px" }
const [newContact , setNewContact] = useState({ favoriteFoods:[]});
const handleChange = (e) => {
  setNewContact({...newContact , [e.target.name]: e.target.value})
}
const dispatch = useDispatch();
const navigate = useNavigate();

const Add = () => {
dispatch(ajoutContact(newContact));
navigate('/contacts');
}

  return (
    <div style={display}>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Name</Form.Label>
        <Form.Control type="text" name='name' onChange={handleChange} placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" name='age' onChange={handleChange} placeholder="Enter your age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit" onClick={() => Add()}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default AddContact
