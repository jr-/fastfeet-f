import React from 'react';

import { Container, DeliveryInfos, DateInfos, Signature } from './styles';

export default function Modal({ delivery }) {
  return (
    <Container>
      <DeliveryInfos>
        <span>Informações da encomenda</span>
        <p>{`${delivery.recipient.street}, ${delivery.recipient.number}`}</p>
        <p>{`${delivery.recipient.city} - ${delivery.recipient.state}`}</p>
        <p>{delivery.recipient.postal_code}</p>
      </DeliveryInfos>

      <DateInfos>
        <span>Datas</span>
        {delivery.startDateFormatted ? (
          <div>
            <span>Retirada:</span>
            <p>{delivery.startDateFormatted}</p>
          </div>
        ) : null}
        {delivery.endDateFormatted ? (
          <div>
            <span>Entrega:</span>
            <p>{delivery.endDateFormatted}</p>
          </div>
        ) : null}
        {delivery.canceledAtFormatted ? (
          <div>
            <span>Cancelada:</span>
            <p>{delivery.canceledAtFormatted}</p>
          </div>
        ) : null}
      </DateInfos>
      {delivery.signature.url ? (
        <Signature>
          <span>Assinatura do destinatário</span>
          <img src={delivery.signature.url} alt="assinatura do destinatário" />
        </Signature>
      ) : null}
    </Container>
  );
}
