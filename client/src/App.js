import {  Route, Routes } from 'react-router-dom';
import './App.css';
import HomeContact from './Pages/HomeContacts/HomeContact';
import Contacts from './Pages/Contacts/Contacts';
import AddContact from './Pages/AddContact/AddContact'
import Errors  from './Pages/Errors/Errors';
import Navigation from './Components/Navigation/Navigation';
import DetailContact from './Pages/DetailContact/DetailContact';
import EditContact from './Pages/EditContact/EditContact';

function App() {
  return (
    <div className="App">
      <Navigation/>

<Routes>
  <Route path='/' element={<HomeContact/>}/>
  <Route path='/contacts' element={<Contacts/>}/>
  <Route path='/add_contact' element={<AddContact/>}/>
  <Route path='/detail/:id' element={<DetailContact/>}/>
  <Route path='/edit/:id' element={<EditContact/>}/>
  <Route path='*' element={ <Errors/> }/>
</Routes>
    </div>
  );
}

export default App;
