import React, { useState } from "react";
import '../styles/add.css'

const Mostrar = () => {
    const [contactos, crearContactos] = useState([]);

    const  buscarContactos = () => {
        fetch('http://www.raydelto.org/agenda.php')
        .then(response => response.json())
        .then(data => crearContactos(data))
    }

    const mostrarContactos = () => {
        buscarContactos()

        return (
            <div class="table-responsive container">
                <div class="alert alert-secondary mt-4 mb-4 col-10 mid" role="alert">
                    <h2>Contactos Creados</h2>
                    <h2>- {contactos.length} -</h2>
                </div>
                <table class="table border table-hover">
                    <thead class="thead-white text-black">
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Telefono</th>
                        </tr>
                    </thead>
                    {
                        contactos.map(contacto => 
                            <tbody class="text-gray">
                                <tr key={contacto.telefono}>
                                    <td>{contacto.nombre}</td>
                                    <td>{contacto.apellido}</td>
                                    <td>{contacto.telefono}</td>
                                </tr>
                            </tbody>)
                    }
                </table>
            </div>
        )
    }
    
    return (
        <div>
        {mostrarContactos()}
        </div>
    )
}

export default Mostrar