import React from 'react'
import { Link } from 'react-router-dom'

const EditContact = () => {
  return (
    <>
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
                        <input type="email" class="form-control" placeholder="Name" id="email" />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Photo Url:</label>
                        <input type="password" class="form-control" placeholder="Photo Url" />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Mobile No:</label>
                        <input type="password" class="form-control" placeholder="Mobile No" />
                    </div>
                    <div class="form-group">
                        <label >Email:</label>
                        <input type="email" class="form-control" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Company:</label>
                        <input type="password" class="form-control" placeholder="Company" />
                    </div>
                   
                        <div class="form-group">
                            <label for="sel1">Select Title:</label>
                            <select class="form-control" id="sel1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    

                    <div className=' w-50 m-auto text-center d-flex'>
                        <button type="submit" class="btn btn-success w-100 mr-4">Update Contact</button>
                        <Link type="button" class="btn btn-dark w-100" to="/contacts/list">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>

</>
  )
}

export default EditContact