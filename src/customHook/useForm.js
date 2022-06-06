import { useState } from 'react';

export default function useForm(inicio) {
  const [form, setForm] = useState(inicio);

  const modificarForm = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const limpiarForm = () => setForm(inicio);

  return [form, modificarForm, limpiarForm];
}
