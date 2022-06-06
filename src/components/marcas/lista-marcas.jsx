import React from 'react';
import PropTypes from 'prop-types';

import './marca.css';

function ListaMarcas({ marcas, buttonModificar, buttonEliminar }) {
  return (
    <div>
      <h1>Lista Marcas</h1>
      {(marcas.length === 0)
        ? <p>No hay marcas</p>
        : (
          <table>
            <thead>
              <tr>
                <td>Id</td>
                <td>Nombre</td>
                <td>Imagen</td>
                <td />
                <td />
              </tr>
            </thead>
            <tbody>
              {marcas.map((marca) => (
                <tr key={marca.id}>
                  <td>{marca.id}</td>
                  <td>{marca.nombre}</td>
                  <td>
                    <img src={`http://localhost:3000${marca.imagen}`} alt={marca.nombre} />
                  </td>
                  <td>
                    <button type="button" onClick={() => buttonModificar(marca)}>Modificar</button>
                  </td>
                  <td>
                    <button type="button" onClick={() => buttonEliminar(marca.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </div>
  );
}

ListaMarcas.propTypes = {
  marcas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    nombre: PropTypes.string,
    imagen: PropTypes.string,
  })).isRequired,
  buttonModificar: PropTypes.func.isRequired,
  buttonEliminar: PropTypes.func.isRequired,
};

export default ListaMarcas;
