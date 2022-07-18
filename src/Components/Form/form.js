import React from 'react';
import './Form.css'
import { Container } from '@mui/material';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Basic = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()
        Swal.fire({
            title: 'Recibimos tu consulta',
            text: 'Nos pondremos en contacto con vos a la brevedad ',
            icon: 'success',
            confirmButtonText: `<button onClick='location.reload()' id="buttonCheckout2">OK</button>`,

        });
    }
    


    return(
    <Container className='containerForm'>
        <form className='form-temp' action='' onSubmit={handleSubmit}>
            <h2 className='formContact'>CONTACTO</h2>
            <input type={"text"} name="Nombre" placeholder='Nombre'></input>
            <input type={"text"} name="Correo" placeholder='Correo'></input>
            <input type={"tel"} name="Telefono" placeholder='Telefono'></input>
            <textarea name='Mensaje' placeholder='Escribinos tu consulta'></textarea>
            <input type={"submit"} value="ENVIAR" id='buttonForm'></input>
        </form>
    </Container>
    )
}


export default Basic;