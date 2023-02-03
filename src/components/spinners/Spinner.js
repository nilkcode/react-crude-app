import React from 'react'
import spinnerImg from '../../assets/img/loader.gif'
  
const Spinner = () => {
  return (
    <>
       <div style={{position:'absolute', width: '75%',transform: 'translate(-5%, 13%)'
}}>
          <img src={spinnerImg} className='d-block  m-auto' style={{width:"100px"}} />
       </div>
    </>
  )
}

export default Spinner;