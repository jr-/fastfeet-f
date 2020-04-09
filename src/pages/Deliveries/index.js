import React, { useState, useEffect } from 'react';

import { MdAdd } from 'react-icons/md';

import { FaCircle } from 'react-icons/fa';
import api from '~/services/api';

import { words } from '~/utils/internationalization';

import SearchBar from '~/components/SearchBar';

import {
  Container,
  PageTitle,
  PageActions,
  Button,
  Actions,
  TableContainer,
  TableRow,
  TableColumn,
  LabelStatus,
} from './styles';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [actionsRowVisible, setActionsRowVisible] = useState('');
  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries');

      const deliveriesLoaded = response.data.map((d) => ({
        ...d,
        status: words[d.status].br,
      }));

      setDeliveries(deliveriesLoaded);
    }
    loadDeliveries();
  }, []);

  const toggleActions = (rowId) => {
    let rowIdSet = rowId;
    if (rowId === actionsRowVisible) {
      rowIdSet = '';
    }
    setActionsRowVisible(rowIdSet);
  };
  return (
    <Container>
      <PageTitle>Gerenciando encomendas</PageTitle>
      <PageActions>
        <SearchBar />
        <Button type="button">
          <div>
            <MdAdd size={16} color="#FFF" />
          </div>
          <span>CADASTRAR</span>
        </Button>
      </PageActions>
      <TableContainer>
        <TableRow>
          <TableColumn>ID</TableColumn>
          <TableColumn>Destinatário</TableColumn>
          <TableColumn>Entregador</TableColumn>
          <TableColumn>Cidade</TableColumn>
          <TableColumn>Estado</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Ações</TableColumn>
        </TableRow>
        {deliveries.map((d) => (
          <TableRow key={d.id}>
            <TableColumn>#${d.id}</TableColumn>
            <TableColumn>{d.recipient.name}</TableColumn>
            <TableColumn>{d.courier.name}</TableColumn>
            <TableColumn>{d.recipient.city}</TableColumn>
            <TableColumn>{d.recipient.state}</TableColumn>
            <TableColumn>
              <LabelStatus status={d.status}>
                <FaCircle size={10} />
                <text>{d.status.toUpperCase()}</text>
              </LabelStatus>
            </TableColumn>
            <TableColumn>
              <button type="button" onClick={() => toggleActions(d.id)}>
                ...
              </button>
              {actionsRowVisible === d.id ? (
                <Actions>
                  <li>Visualizar</li>
                  <li>Editar</li>
                  <li>Excluir</li>
                </Actions>
              ) : null}
            </TableColumn>
          </TableRow>
        ))}
      </TableContainer>
    </Container>
  );
}
