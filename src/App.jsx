import { allMarcas, deleteMarcaById } from 'api/MarcaAPI';
import FormMarca from 'components/marcas/form-marcas';
import ListaMarcas from 'components/marcas/lista-marcas';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [modo, setModo] = useState({ op: '', marca: {} });

  const [marcas, setMarcas] = useState([]);

  const buttonModificar = (marca) => {
    setModo({ op: 'M', marca });
  };

  const buttonEliminar = (id) => {
    deleteMarcaById(id).then(() => {
      setMarcas(marcas.filter((elemento) => elemento.id !== id));
    });
  };

  useEffect(() => {
    allMarcas().then(({ marcas: marcasResp }) => {
      setMarcas(marcasResp);
    });
  }, []);

  return (
    <div>
      <ListaMarcas
        marcas={marcas}
        buttonModificar={buttonModificar}
        buttonEliminar={buttonEliminar}
      />

      {modo.op === '' || <FormMarca modo={modo.op} marca={modo.marca} />}

    </div>
  );
}

export default App;
