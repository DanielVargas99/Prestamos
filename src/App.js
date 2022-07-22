import React, {Fragment, useState} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';

function App() {

  // Definir el state
  // Array destructuring: useState requiere dos argumentos
  // cantidad va a tener el valor del estado (0), guardarCantidad, funcion para guardar o modificar el state
  // se inicializa en 0
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState("");
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  // Carga condicional de componentes
  // Primero mostrar Spinner de carga
  // Si el estado del total es 0, significa que aun no se han cotizado prestamos
  // En caso contrario, cargar el total
  let componente;
  if(cargando) {
    componente = <Spinner />
  } else if(total === 0){
    componente = <Mensaje />
  } else {
    componente = <Resultado 
                    total = {total}
                    plazo = {plazo}
                    cantidad = {cantidad}
                  />
  }

  return (
    <Fragment>
      <Header 
        titulo = "Cotizador de prestamos"
      />
      <div className="container">
        <Formulario 
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />
        <div className='mensajes'>
          {componente}
        </div>
      </div>
    </Fragment>
  );
}

export default App;