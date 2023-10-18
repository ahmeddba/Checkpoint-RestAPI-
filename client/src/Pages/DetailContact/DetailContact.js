import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { getOneContact } from '../../JS/Actions/ContactActions';

const DetailContact = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const contact = useSelector(state => state.oneContact);
    const loading   = useSelector(state => state.loadContacts);
const match = useMatch('/detail/:id');
    useEffect(() => {
            dispatch(getOneContact(match.params.id));

        }, [dispatch , match.params.id])



    return (
    <div>
        {
            loading ? (<h1>Loading...</h1>) : contact &&
            (<Card>
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


                  <Button variant="primary" onClick={()=> navigate('/contacts')}>Back</Button>
                </Card.Body>
              </Card>
          )
        }
    </div>
  )
}

export default DetailContact
