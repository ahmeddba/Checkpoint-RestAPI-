import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../../JS/Actions/ContactActions';
import ContactCard from './ContactCard';

const ContacList = () => {
  const display = {display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center'}
  const contactList = useSelector(state => state.contacts);
  const load = useSelector(state => state.loadContacts);
  const dispatch = useDispatch();

 useEffect(() => {
    dispatch(getContacts());

 }, [ dispatch ]);


  return (
    <div style={display}>
{
  load ? (<h1>Loading...</h1>) :
contactList?
  contactList.map((contact) => <ContactCard contact={contact}  key={contact._id} />)
  : (<h1>No Contact Found</h1>)
}
    </div>
  )
}

export default ContacList
