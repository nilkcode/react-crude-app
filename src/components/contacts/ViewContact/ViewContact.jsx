import React from 'react';
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { ContactService } from '../../../services/ContactService';

const ViewContact = () => {

   const {contactId} = useParams();

   console.log(contactId)

  let[state, setState ] = useState({
    loading:false,
    contact: {},
    errorMessage:'',
    group:{}
  })

  useEffect(async()=> {debugger
    setState({...state ,laoding:true})
    try{
        let response = await ContactService.getSingleDataContact(contactId)
        let groupResp = await ContactService.getSingleGroup(response.data)
        console.log(response.data)
        console.log(groupResp.data)
        setState({
         ...state,
         loading:false,
         contact:response.data,
         group:groupResp.data
        })
    }catch(error){
     setState({
         ...state,
         loading:false,
         errorMessage:error.message
        })
    }
 },[])

  let{loading,contact,errorMessage ,group} = state
     
  return (
       
    <> 
    {JSON.stringify(state.group)}
       <div className='mt-5'>
         { Object.keys(contact).length > 0 && Object.keys(group).length > 0 &&
           <div className="card card-custome w-50 m-auto bg-secondary-gray" >

           <img className='card-img-top' style={{width:"152px",height:"152px",borderRadius:"50%",padding:"4px"}} src={contact.photo} alt="" />
           <div className='card-body'>
               <div className='d-flex justify-content-between mb-2'>
                   <div className='d-flex flex-start'>
                       <div><label className='mr-2'>Name:</label></div>
                       <div><label className='label-value'>{contact.name} </label></div>
                   </div>
                   <div>
                   <Link type="button" class="btn btn-warning" to="/contacts/list"><i className='fa fa-arrow-left mr-2'></i>Back</Link>
                   </div>
                   
               </div>
               <div className='d-flex justify-content-between mb-2'>
                   <div className='d-flex flex-start'>
                       <div><label className='mr-2'>Mobile:</label></div>
                       <div><label className='label-value'>{contact.mobile}  </label></div>
                   </div>
                   <div>
                   </div>
                   
               </div>
               <div className='d-flex justify-content-between mb-2'>
                   <div className='d-flex flex-start'>
                       <div><label className='mr-2'>Email </label></div>
                       <div><label className='label-value'>{contact.email} </label></div>
                   </div>
                   <div>
                   </div>
                   
               </div>
               <div className='d-flex justify-content-between mb-2'>
                   <div className='d-flex flex-start'>
                       <div><label className='mr-2'>Company:</label></div>
                       <div><label className='label-value'>{contact.company} </label></div>
                   </div>
                   
                   
               </div>
               <div className='d-flex justify-content-between mb-2'>
                   <div className='d-flex flex-start'>
                       <div><label className='mr-2'>Title:</label></div>
                       <div><label className='label-value'>{contact.title} </label></div>
                   </div>
                   <div>
                   </div>
                   
               </div>
               <div className='d-flex justify-content-between mb-2'>
                   <div className='d-flex flex-start'>
                       <div><label className='mr-2'>Group </label></div>
                       <div><label className='label-value'>{group.name}</label></div>
                   </div>
                   <div>
                   </div>
                   
               </div>
           </div>
       </div>
         }
         
       </div>
    </>
  )
}

export default ViewContact