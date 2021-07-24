import React from 'react';
import "./Contact.css"
interface Iprop{
    name:string,
    email:string,
     handleRemove: (email: string) => void
}
const Contact = ({name, email, handleRemove}:Iprop) => {
    return (
        <div className="card2">
           <p><strong>Name:</strong> {name}</p> 
           <p><strong>Name:</strong> {email}</p> 
           <button onClick={() => handleRemove(email)}>Remove</button>
        </div>
    );
};

export default Contact;