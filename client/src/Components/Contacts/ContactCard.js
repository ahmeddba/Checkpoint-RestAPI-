import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../JS/Actions/ContactActions'
import { useNavigate } from 'react-router-dom'

const ContactCard = ({contact}) => {
  const margin = {"margin": "28px" , "width": "18rem"}
  const dispatch = useDispatch();
const navigate = useNavigate();

  return (
    <>
      <Card style={margin}>
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>Age:  {contact.age} </Card.Text>
        <Card.Text>
          {
            contact.favoriteFoods ?
           <> Favorite food: {contact.favoriteFoods}</>
           :"No favorite food"
          }
        </Card.Text>


        <Button variant="primary" onClick={()=> navigate(`/detail/${contact._id}`)}>Show details</Button>
        <Button style={{margin: "0 15px"}} onClick={() => dispatch(deleteContact(contact._id))} variant='danger'>Delete</Button>
        <br />
        <br />
        <Button variant='secondary' onClick={()=> navigate(`/edit/${contact._id}`)}>Edit</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default ContactCard
