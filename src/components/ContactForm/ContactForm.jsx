import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { formSubmitHandler } from 'components/redux/contactSlice.js';
import { Form, Input, Label, Button } from './ContactForm.styled.js';
import { nanoid } from '@reduxjs/toolkit';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handeleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handeleSubmit = event => {
    event.preventDefault();

    dispatch(formSubmitHandler({ name, number, id: nanoid() }));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handeleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handeleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handeleChange}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
}
