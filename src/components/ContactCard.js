import React from 'react';

const ContactCard = (props) => {
  return (
    <div className='contact-card'>
      <h3>{props.contact.name}</h3>
      <p>Type: {props.contact.type}</p>
      <p>Age: {props.contact.age}</p>
    </div>
  )
};

export default ContactCard;