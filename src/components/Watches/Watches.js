import React, { useState } from 'react';
import './Watches.css';
import Form from '../Form/Form';
import Table from '../Table/Table';
import TableRow from '../Table/TableRow/TableRow';

function Watches() {
  const [watches, setRecord] = useState([]);
  const [form, setForm] = useState({name: '', zone: ''});

  function handlerRemoveWatch(id) {
    setRecord(prevState => {
      return prevState.filter(watch => watch.id !== id);
    })
  };

  const watchesList = watches
    .map( watch => {
      return (
        <TableRow removeWatch={handlerRemoveWatch} key={watch.id} watch={watch} />
      )
  });

  return (
  <div className="steps">
    <Form form={form} setForm={setForm} setRecord={setRecord} />
    {watches.length != 0 ? <Table watchesList={watchesList} /> : ''}
  </div> 
  );
}

export default Watches;
