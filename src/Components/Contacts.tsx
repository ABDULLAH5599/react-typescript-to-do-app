import React, { useState } from 'react';
import Contact from './Contact';
interface IContact{
    name: string;
    email: string;
}
const Contacts = () => {

    const [contact, setContact]=useState<IContact>({
        name: "",
        email: ""
    });
    
    const [contactList, setContactList]=useState<IContact[]>([])
    console.log("contact",contact)
    

    const addList = ()=>{
     setContactList([...contactList, contact])
     setContact({
        name: "",
        email: ""
    })
   
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
        setContact({ ...contact, [e.target.name]:  e.target.value})
    }
    const handleRemove = (email: string) => {
        const newContactList = contactList.filter(c => c.email !== email)
        setContactList(newContactList)
    }


    return (
      
            <div>
            <h1> My Information</h1>
            <div className="form">

                <input
                value={contact.name}
                 onChange={onChange}
                 type="text"
                  placeholder="Enter Your Names"
                   name="name" id="" />
                    <input
                value={contact.email}
                 onChange={onChange}
                 type="email"
                  placeholder="Enter Your email"
                   name="email" id="" />
                   <button onClick={addList}>Add</button>
            </div>
        {
            contactList.map( contactInfo => <Contact name={contactInfo.name} email={contactInfo.email} handleRemove={handleRemove}/>)
        }
          
        </div> 
     
    );
};

export default Contacts;