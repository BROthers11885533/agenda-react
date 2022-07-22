import React from 'react';
import Agregar from './components/Agregar'
import Mostrar from './components/Listar'
import "./styles/app.css"

function App() {
    return (
      <div class="mb-2">
        <header class="navbar navbar-inverse p-3 mb-4 alert alert-secondary text-black">
          <h4>Agenda creada en react</h4>
        </header>
        <div class="row">
          <nav class="col container"><Agregar/></nav>
          <nav class="col"><Mostrar/></nav>
        </div>
      </div>
    )
}

export default App