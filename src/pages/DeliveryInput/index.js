import React, { useState, useEffect } from 'react';

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
  BodyOne,
  DropdownEl,
} from './styles';

export default function DeliveryInput(props) {
  const deliveryFetch = props.location.delivery
    ? props.location.delivery
    : null;
  const [title, setTitle] = useState(
    deliveryFetch ? 'Edição de encomendas' : 'Adicionar encomenda'
  );
  const [recipients, setRecipients] = useState([]);
  const [recipient, setRecipient] = useState(
    deliveryFetch ? deliveryFetch.recipient.name : null
  );
  const [couriers, setCouriers] = useState([]);
  const [courier, setCourier] = useState(
    deliveryFetch ? deliveryFetch.courier.name : null
  );

  const [delivery, setDelivery] = useState({
    id: deliveryFetch ? deliveryFetch.id : null,
    product: deliveryFetch ? deliveryFetch.product : null,
  });

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');
      const recipientsF = response.data.map((r) => ({
        id: r.id,
        name: r.name,
      }));
      setRecipients(recipientsF);
    }
    loadRecipients();
  }, []);

  useEffect(() => {
    async function loadCouriers() {
      const response = await api.get('couriers');
      const couriersF = response.data.map((c) => ({
        id: c.id,
        name: c.name,
      }));
      setCouriers(couriersF);
    }
    loadCouriers();
  }, []);

  async function handleSubmit(data) {
    let response;
    if (delivery.id) {
      const recipientF = recipients.find((r) => r.name === recipient);
      const courierF = couriers.find((c) => c.name === courier);
      const deliveryToUpd = {
        product: data.product,
        recipient_id: recipientF.id,
        courier_id: courierF.id,
      };
      response = await api.put(`deliveries/${delivery.id}`, deliveryToUpd);
      setDelivery({ id: response.data.id, product: response.data.product });
    } else if (recipient && courier && data.product) {
      const recipientF = recipients.find((r) => r.name === recipient);
      const courierF = couriers.find((c) => c.name === courier);
      const deliveryToAdd = {
        product: data.product,
        recipient_id: recipientF.id,
        courier_id: courierF.id,
      };
      response = await api.post(`deliveries`, deliveryToAdd);
      setDelivery({ id: response.data.id, product: response.data.product });
    }
  }

  function handleRecipient({ value }) {
    setRecipient(value);
  }

  function handleCourier({ value }) {
    setCourier(value);
  }

  return (
    <Container>
      <Form initialData={delivery} onSubmit={handleSubmit}>
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
          <BodyOne>
            <div>
              <text>Destinatário</text>
              <DropdownEl
                options={recipients.map((r) => r.name)}
                onChange={handleRecipient}
                value={recipient}
              />
            </div>
            <div>
              <text>Entregador</text>
              <DropdownEl
                options={couriers.map((c) => c.name)}
                onChange={handleCourier}
                value={courier}
              />
            </div>
          </BodyOne>
          <text>Nome do produto</text>
          <Input name="product" />
        </PageBody>
      </Form>
    </Container>
  );
}
