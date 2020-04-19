import React, { useState } from 'react';

import { IoIosArrowBack, IoMdCheckmark } from 'react-icons/io';

import { Form, Input } from '@rocketseat/unform';
import api from '~/services/api';

import {
  Container,
  PageHead,
  PageTitle,
  PageActions,
  Button,
  PageBody,
  LabelImg,
} from './styles';

export default function CourierInput(props) {
  const courierFetch = props.location.courier ? props.location.courier : null;
  const [courier, setCourier] = useState(courierFetch || null);

  const title = courierFetch
    ? 'Edição de entregadores'
    : 'Cadastro de entregadores';

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(
    courierFetch ? courierFetch.avatar.url : null
  );

  async function handleSubmit(courierToUpd) {
    const data = new FormData();

    if (courier) {
      let hasChanged = false;
      if (file) {
        data.append('file', file);
        hasChanged = true;
      }

      if (
        courierToUpd.email !== courier.email ||
        courierToUpd.name !== courier.name
      ) {
        data.append(
          'courier',
          JSON.stringify({
            email: courierToUpd.email,
            name: courierToUpd.name,
          })
        );
        hasChanged = true;
      }
      if (hasChanged) {
        const response = await api.put(`couriers/${courier.id}`, data);
        setCourier(response.data);
      }
    } else if (courierToUpd.email && courierToUpd.name && file) {
      data.append('file', file);
      data.append(
        'courier',
        JSON.stringify({
          email: courierToUpd.email,
          name: courierToUpd.name,
        })
      );
      const response = await api.post('couriers', data);
      setCourier(response.data);
    }
  }

  function handleChange(e) {
    const newFile = e.target.files[0];
    setPreview(URL.createObjectURL(newFile));
    setFile(newFile);
  }

  return (
    <Container>
      <Form initialData={courier} onSubmit={handleSubmit}>
        <PageHead>
          <PageTitle>{title}</PageTitle>
          <PageActions>
            <Button className="back" type="button">
              <div>
                <IoIosArrowBack size={16} color="#FFF" />
              </div>
              <span>VOLTAR</span>
            </Button>
            <Button type="submit">
              <div>
                <IoMdCheckmark size={16} color="#FFF" />
              </div>
              <span>SALVAR</span>
            </Button>
          </PageActions>
        </PageHead>
        <PageBody>
          <LabelImg htmlFor="avatar">
            <img
              src={
                preview ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt=""
            />
            <input
              name="avatar_id"
              type="file"
              id="avatar"
              accept="image/*"
              data-file={file}
              onChange={handleChange}
            />
          </LabelImg>

          <text>Nome</text>
          <Input name="name" placeholder="Nome completo" />
          <text>Email</text>
          <Input name="email" placeholder="Seu endereço de e-mail" />
        </PageBody>
      </Form>
    </Container>
  );
}
