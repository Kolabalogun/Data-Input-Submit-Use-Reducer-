import React from 'react';
import './Style.css'

const Modal = ({modalContext,closeModal}) => { 

    React.useEffect(() => {
     setTimeout(() => {
        closeModal()
     }, 3000);
      
    })
    

  return (
      <div className="moal">
          <div className='modal'>{modalContext}</div>
      </div>
  )
};

export default Modal;
