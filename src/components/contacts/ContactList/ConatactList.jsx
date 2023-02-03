import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner  from "../../spinners/Spinner";

import { ContactService } from '../../../services/ContactService'
import { constants } from 'buffer';

const ConatactList = () => {

 
let[state,setState] = useState({
    loading:false,
    contacts:[],
    errorMessage:''
})

useEffect(async()=> {
   setState({...state ,laoding:true})
   try{
       let response = await ContactService.getAllContacts();
       console.log(response.data)
       setState({
        ...state,
        loading:false,
        contacts:response.data
       })
   }catch(error){
    setState({
        ...state,
        loading:false,
        errorMessage:error.message
       })
   }
},[])

let { loading, contacts, errorMessage } = state;
  return (
    <>
       <div className="container-fluid mt-5 w-75">
       <nav className="navbar navbar-expand-sm bg-secondary navbar-dark mb-2">
                <ul className="navbar-nav ">
                    <li className="nav-item active">
                        <Link className="btn btn-success " to="/contacts/add"><i className='fa fa-plus mr-1'></i>Add Contact</Link>
                    </li>
                    
                  
                </ul>
            </nav>
            <form className="form-inline" action="/action_page.php">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-success" type="submit">Search</button>
            </form>
            
            <div className="cantact-list-section mt-3">
             
            { contacts.length <= 0 ? <Spinner/> :  contacts.map((user,index) => (
                        <div className="card card-custome" key={user.id}>
                        <img className='card-img-top' style={{width:"152px",height:"152px",borderRadius:"50%",padding:"4px"}} src={user.photo} alt="photos" />
                        <div className='card-body'>
                            <div className='d-flex justify-content-between mb-4'>
                                <div className='d-flex flex-start'>
                                    <div><label className='mr-2'>Name:</label></div>
                                    <div><label className='label-value'>{user.name}</label></div>
                                </div>
                                <div>
                                <Link type="button" class="btn btn-warning" to={`/contacts/view/${user.id}`}><i className='fa fa-eye'></i></Link>
                                </div>
                                
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <div className='d-flex flex-start'>
                                    <div><label className='mr-2'>Mobile:</label></div>
                                    <div><label className='label-value'>{user.mobile} </label></div>
                                </div>
                                <div>
                                <button type="button" class="btn btn-primary"><i className='fa fa-edit'></i></button>
                                </div>
                                
                            </div>
                            <div className='d-flex justify-content-between mb-4'>
                                <div className='d-flex flex-start'>
                                    <div><label className='mr-2'>Email </label></div>
                                    <div><label className='label-value'>{user.email} </label></div>
                                </div>
                                <div>
                                <Link type="button" class="btn btn-danger" to="/contacts/edit/:contactId"><i className='fa fa-trash'></i></Link>
                                </div>
                                
                            </div>
                        </div>
                       </div>
               ))}
              
              
            </div>
       </div>
    
    </>
  )
}

export default ConatactList