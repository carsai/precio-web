const addMarca = async (marca) => {
  const { nombre } = marca;

  const formData = new FormData();

  formData.append('nombre', nombre);

  const respuesta = await fetch(process.env.REACT_APP_MARCA, {
    method: 'POST',
    body: formData,
  });

  return respuesta.json();
};

const updateMarca = async (marca) => {
  const { id, nombre } = marca;

  const formData = new FormData();

  formData.append('id', id);
  formData.append('nombre', nombre);

  const respuesta = await fetch(process.env.REACT_APP_MARCA, {
    method: 'PUT',
    body: formData,
  });

  return respuesta.json();
};

const allMarcas = async () => (await fetch(process.env.REACT_APP_MARCA)).json();

const findMarcaById = async (id) => (await fetch(`${process.env.REACT_APP_MARCA}/${id}`)).json();

const deleteMarcaById = async (id) => (await fetch(`${process.env.REACT_APP_MARCA}/${id}`, { method: 'DELETE' })).json();

export {
  addMarca,
  updateMarca,
  allMarcas,
  findMarcaById,
  deleteMarcaById,
};
