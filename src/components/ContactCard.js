import React from 'react';
 

const ContactCard =(props)=>{

    const {id,name,email}=props.contact;
    return(
        <div className="item">
        <div className="content">
        <div className="header">{name}</div> 
        <div>{email}</div>
       
        <i
    className="trash alternate outline icon"
    style={{ color: "red", marginBottom:'7px',float:'right' }}
 onClick={()=>props.clickHandler(id)}
  ></i> </div>
  </div>
    )

};

export default ContactCard;