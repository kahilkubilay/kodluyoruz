import { useState, useEffect } from 'react';
import List from './List';
import Form from './Form';
import './styles.css'

function Contacts() {
    const [contacts, setContacts] = useState([ {
        fullName: 'ali',
        phoneNumber: "23234324",
    }, {
        fullName: 'mustafa',
        phoneNumber: '232343'
    }, {
        fullName: 'yasin',
        phoneNumber: '324234234'
    }]);

    useEffect(() => {
        // console.log(contacts);
    }, [contacts])

    return (
        <div id="container">
            <h2>Contacts</h2>
            <List contacts={contacts} />
            <Form addContacts={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts
