import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Content } from './styles';

import logo from '~/assets/fastfeet-logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <Container>
      <Content>
        <img src={logo} alt="FastFeet Admin" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <text>SEU E-MAIL</text>
          <Input name="email" type="email" placeHolder="exemplo@email.com" />
          <text>SUA SENHA</text>
          <Input name="password" type="password" placeHolder="***********" />
          <button type="submit">
            {loading ? 'Carregando...' : 'Entrar no sistema'}
          </button>
        </Form>
      </Content>
    </Container>
  );
}
