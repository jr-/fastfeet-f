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
  BodyTwo,
  BodyThree,
} from './styles';

export default function RecipientInput(props) {
  const recipientFetch = props.location.recipient
    ? props.location.recipient
    : null;
  const [recipient, setRecipient] = useState(recipientFetch || null);

  const title = recipientFetch
    ? 'Edição de destinatário'
    : 'Cadastro de destinatário';

  async function handleSubmit(data) {
    if (
      data.name &&
      data.street &&
      data.number &&
      data.complementary_data &&
      data.city &&
      data.city &&
      data.state &&
      data.postal_code
    ) {
      let response;
      if (recipient) {
        response = await api.put(`recipients/${recipient.id}`, data);
      } else {
        response = await api.post('recipients', data);
      }
      setRecipient(response.data);
    }
  }

  return (
    <Container>
      <Form initialData={recipient} onSubmit={handleSubmit}>
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
          <text>Nome</text>
          <Input name="name" />
          <BodyTwo>
            <div>
              <text>Rua</text>
              <Input name="street" />
            </div>
            <div>
              <text>Número</text>
              <Input name="number" />
            </div>
            <div>
              <text>Complemento</text>
              <Input name="complementary_data" />
            </div>
          </BodyTwo>
          <BodyThree>
            <div>
              <text>Cidade</text>
              <Input name="city" />
            </div>
            <div>
              <text>Estado</text>
              <Input name="state" />
            </div>
            <div>
              <text>CEP</text>
              <Input name="postal_code" />
            </div>
          </BodyThree>
        </PageBody>
      </Form>
    </Container>
  );
}
