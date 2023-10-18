import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom'
import { editContact, getOneContact } from '../../JS/Actions/ContactActions';

const EditContact = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const match = useMatch('/edit/:id');
    const [editedContact , setEditedContact] =useState({});
    console.log(editedContact)
    const handleChange = (e) => {

        setEditedContact({...editedContact , [e.target.name]: e.target.value})

    }
    const edit = () => {
        dispatch(editContact(match.params.id,editedContact));
        navigate('/contacts');
    }
    const contact = useSelector((state)=> state.oneContact)
      useEffect(() => {
           dispatch(getOneContact(match.params.id))
          }, [dispatch, match.params.id])
            
  return (
    <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Name</Form.Label>
        <Form.Control type="text" name='name' onChange={handleChange}  placeholder={contact.name} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" name='age' onChange={handleChange} placeholder={contact.age} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="secondary" type="submit" onClick={() => navigate('/contacts')}>
        Cancel
      </Button>
      <Button variant='primary' onClick={()=> editedContact.name && editedContact.age? edit() :alert("Contact shouldn't be null") } >Modify</Button>
    </Form>
    </div>
  )
}

export default EditContact
