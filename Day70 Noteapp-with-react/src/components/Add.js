import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../hooks/Context';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from 'uuid';
import Modals from './Modals';

const Add = () => {
  let navi = useNavigate();
  const { data, setData } = useContext(dataContext);

  const [model, setModel] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const AddItem = () => {
    if (title !== '' && description !== '') {
      let date = new Date();
      let temp = {
        id: uuid().slice(0, 3),
        noteTitle: title,
        noteBody: description,
        time: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
      };
      setData([...data, temp]);
      navi('/notes');
      setModel(false);
    } else {
      setModel(true);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <Modals showModal={model} closeModal={() => setModel(false)} />
      <h1>Add Notes</h1>
      <Form style={{ width: '50%', margin: '40px auto', textAlign: 'left' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title..." value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Note Content</Form.Label>
          <Form.Control type="text" placeholder="Description...." value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={AddItem}>
          Add Now
        </Button>
      </Form>
    </div>
  );
};

export default Add;
