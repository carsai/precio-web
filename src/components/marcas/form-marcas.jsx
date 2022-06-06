import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { addMarca } from 'api/MarcaAPI';
import useForm from 'customHook/useForm';

function FormMarca({ modo, marca }) {
  const [form, modificarForm, limpiarForm] = useForm(marca);

  const [loading, setLoading] = useState(false);

  const [test, setTest] = useState({});

  const { id, nombre } = form;

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    addMarca(form).then((respuesta) => {
      setLoading(false);
      setTest(respuesta);
      limpiarForm();
    });
  };

  return (
    <div>
      <h1>{(modo === 'A') ? 'Alta Marca' : `Modificación Marca ${marca.nombre}`}</h1>
      {
            (loading)
              ? 'Cargando'
              : (
                <form>
                  <div>
                    <label htmlFor="nombre">
                      Nombre:
                      <input type="text" name="nombre" id="nombre" value={nombre} onChange={modificarForm} />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="imagen">
                      Imagen:
                      <input type="file" name="imagen" id="imagen" />
                    </label>
                  </div>
                  <input type="hidden" name="id" value={id} />
                  <div>
                    <button type="submit" onClick={submit}>{(modo === 'A') ? 'Crear' : 'Modificar'}</button>
                    <button type="button" onClick={limpiarForm}>Limpiar</button>
                  </div>
                </form>
              )
    }
      {JSON.stringify(test)}
    </div>
  );
}

FormMarca.propTypes = {
  modo: PropTypes.string.isRequired,
  marca: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
  }),
};

FormMarca.defaultProps = {
  marca: {
    id: '',
    nombre: '',
  },
};

export default FormMarca;
