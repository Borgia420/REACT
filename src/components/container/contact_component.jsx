import React from 'react';
import Contacto from '../pure/contacto';
import { STATE } from '../../models/conctact.state';
import { CONTACT } from '../../models/contact.class';


const ContactComponent = () => {

    const defaultContact = new CONTACT ("javier","pepo","japepo@gmail.com",STATE.conected);

    return (
        <div>
            <div>
                <h1>Tus contactos</h1>
            </div>
            <Contacto contact={defaultContact}></Contacto>
        </div>
    );
};



export default ContactComponent;
