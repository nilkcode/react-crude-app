import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes ,Route,Navigate} from 'react-router-dom'
import ConatactList from "./components/contacts/ContactList/ConatactList";
import AddContact from "./components/contacts/AddContact/AddContact";
import ViewContact from "./components/contacts/ViewContact/ViewContact";
import EditContact from "./components/contacts/EditContact/EditContact";
import Navbar from "./components/NavBar/NavBar";



let App = () => {
  

  return (
    <>
   
      <Navbar/>
      <Routes>
       <Route path={'/'} element={<Navigate to={'/contacts/list'} />}/>
       <Route path={'/contacts/list'}  element={<ConatactList/>}/>
       <Route path={'/contacts/add'}  element={<AddContact/>}/>
       <Route path={'/contacts/view/:contactId'}  element={<ViewContact/>}/>
       <Route path={'/contacts/edit/:contactId'}  element={<EditContact/>}/>


      </Routes>
    </>
  );
}

export default App;