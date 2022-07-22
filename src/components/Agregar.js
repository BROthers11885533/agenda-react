import React, {useState} from "react";
import "../styles/add.css"

const Agregar = () => {
    const [nombre, crearNombre] = useState('');
    const [apellido, crearApellido] = useState('');
    const [telefono, crearTelefono] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const usuario = {nombre, apellido, telefono};

        fetch ('http://www.raydelto.org/agenda.php', {
            method: 'POST',
            body: JSON.stringify(usuario)
        }).then(() => {
            alert('Contacto Agregado')
        })
    }

    return (
        <nav>
            <div class="container card mt-4 alert alert-secondary form-group col-10 bg-gray">
                <h2 class="mt-3 mb-3 d-flex justify-content-center"> Ingrese un contacto para agregarlo </h2>
                <form onSubmit={handleSubmit}>
                    <input class="form-control mb-3 col-8" placeholder="Nombre" type="text"  required value={nombre} onChange={(e) => crearNombre(e.target.value)}></input>
                    <input class="form-control mb-3 col-8" placeholder="Apellido" type="text" required value={apellido} onChange={(e) => crearApellido(e.target.value)}></input>
                    <input class="form-control mb-3 col-8" placeholder="Teléfono" type="text" required value={telefono} onChange={(e) => crearTelefono(e.target.value)}></input>
                    <button class="btn btn-outline-secondary mt-2 mb-3 col-3"> Agregar </button>
                </form>
            </div>
        </nav>
    )
}

export default Agregar