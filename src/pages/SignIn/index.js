import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  function handleSubmit({ email, password }) {
    console.tron.log(email, password);
  }
  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeHolder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeHolder="Sua senha secreta"
        />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
