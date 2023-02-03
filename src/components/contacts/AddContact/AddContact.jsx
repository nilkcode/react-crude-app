import { logDOM } from '@testing-library/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { json, Link } from 'react-router-dom'
import { ContactService } from '../../../services/ContactService'


const AddContact = () => {

    let[state, setState] = useState({
        loading:false,
        contact:{
               name:'',
               photo:'',
               mobile:'',
               email:'',
               title:'',
               company:'',
               title:'',
               groupId:'',
        },
        groups : [],
        errorMessage:''
    })

    let AddContactUser = (event) => {
       setState({
         ...state,
         contact:{
             ...state.contact,
             [event.target.name]:event.target.value
         }
       })
    }

    useEffect( async() => {
          try{
            let response = await ContactService.getGroups();
            console.log(response.data);

          }catch(error){

          }
    },[])

    let{loading, errorMessage, contact, group}  = state
 
    return (
        <>
           <span>{JSON.stringify(state.contact)}</span>
            <div className="container-fluid mt-5 w-75">
                <h2 className='text-success bold'> Create Contact</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ipsam quas esse voluptate, itaque facilis eveniet.
                    A, totam iste! Necessitatibus nostrum tenetur repellat possimus,
                    sequi dolor, facere vero eum iste in omnis sunt, eos libero cumque aliquid corporis expedita quo!</p>

                <div className='card w-50 m-auto bg-secondary-gray'>
                    <div className='card-body'>
                        <form action="/action_page.php">
                            <div class="form-group">
                                <label >Name:</label>
                                <input type="text" name="name" value={contact.name} onChange={AddContactUser} class="form-control" placeholder="Name" id="email" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="pwd">Photo Url:</label>
                                <input type="text" name="photo" value={contact.photo} onChange={AddContactUser} class="form-control" placeholder="Photo Url" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="mobile">Mobile No:</label>
                                <input type="number" name="mobile" value={contact.mobile} onChange={AddContactUser} class="form-control" placeholder="Mobile No" />
                            </div>
                            <div class="form-group">
                                <label >Email:</label>
                                <input type="email" name="email" value={contact.email} onChange={AddContactUser} class="form-control" placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="company">Company:</label>
                                <input type="text" name="company" value={contact.company} onChange={AddContactUser} class="form-control" placeholder="Company" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="title">Title:</label>
                                <input type="text" name="title" value={contact.title} onChange={AddContactUser} class="form-control" placeholder="Company" />
                            </div>
                           
                                <div class="form-group">
                                    <label for="sel1">Select Title:</label>
                                    <select required={true} name="name" value = {contact.groupId} 
                                     onChange={AddContactUser}  class="form-control" id="sel1">
                                        <option></option>
                                      
                                    </select>
                                </div>
                            

                            <div className=' w-50 m-auto text-center d-flex'>
                                <button type="submit" class="btn btn-success w-100 mr-4">Create Contact</button>
                                <Link type="button" class="btn btn-dark w-100" to="/contacts/list">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddContact;