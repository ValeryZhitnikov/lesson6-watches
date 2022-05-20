import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './Form.css';
import Input from './Input/Input';

function Form(props) {
  const { setRecord, form, setForm } = props;
  
  const fields = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      label: 'Название'
    },
    {
      id: 2,
      name: 'zone',
      type: 'text',
      label: 'Временная зона'
    }
  ];

  function handleChange({target}) {
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setForm( prevForm =>{
      return {...prevForm, [name]: value}
    });
  };

  function formSubmitHandler(e) {
    e.preventDefault();
    if (!form.name || !form.zone) {
      alert('Заполните все поля!');
      return;
    }

    const watch = {id: nanoid(), name: form.name, zone: form.zone};

    setRecord( prevState => {
      return [...prevState, watch];
    });

    setForm({name: '', zone: ''});
  };

  const inputs = fields.map( field => {
    const params = {
      key: field.id,
      name: field.name,
      type: field.type,
      label: field.label,
      handleChange: handleChange,
      form: form
    };
    return (<Input {...params} />);
  } );

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      {inputs}
      <button className="main-input form-submit" type="submit">Добавить</button>
    </form>
  );
}

Form.propTypes = {
  setRecord: PropTypes.func.isRequired,
  setForm: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired
}

export default Form;
