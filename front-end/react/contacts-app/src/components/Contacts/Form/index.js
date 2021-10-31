import { useState, useEffect } from 'react';
import React from 'react'


const initialFormValue = {fullName: "", phoneNumber: ""};
function Form({ addContacts, contacts }) {
    // console.log(addContacts);

    const [form, setForm] = useState(initialFormValue);

    useEffect(() => {
        setForm(initialFormValue);
    }, [contacts]);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    } 

    const onSubmit = (e) => {
        e.preventDefault();

        if(form.fullName === '' || form.phoneNumber === '') {
            return false;
        }

        addContacts([...contacts,form]);
    }
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <input name="fullName" placeholder="full name" onChange={onChangeInput} value={form.fullName}/>
                </div>
                <div>
                    <input name="phoneNumber" placeholder="Phone number" onChange={onChangeInput} 
                        value={form.phoneNumber}/>
                </div>

                <div className="btn">
                    <button>Add</button>
                </div>
            </form>
        </>
    )
}

export default Form
