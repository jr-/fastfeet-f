import React, { useState, useEffect } from 'react';

import { MdAdd } from 'react-icons/md';

import { Link } from 'react-router-dom';

import api from '~/services/api';

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
} from './styles';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [actionsRowVisible, setActionsRowVisible] = useState('');
  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');

      const recipientsLoaded = response.data.map((r) => ({
        ...r,
        address: `${r.street}, ${r.number}, ${r.city} - ${r.state}`,
      }));

      setRecipients(recipientsLoaded);
    }
    loadRecipients();
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
      <PageTitle>Gerenciando destinatários</PageTitle>
      <PageActions>
        <SearchBar text="Buscar por destinatários" />
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
          <TableColumn>Nome</TableColumn>
          <TableColumn>Endereço</TableColumn>
          <TableColumn>Ações</TableColumn>
        </TableRow>
        {recipients.map((r) => (
          <TableRow key={r.id}>
            <TableColumn>#{r.id}</TableColumn>
            <TableColumn>{r.name}</TableColumn>
            <TableColumn>{r.address}</TableColumn>
            <TableColumn>
              <button type="button" onClick={() => toggleActions(r.id)}>
                ...
              </button>
              {actionsRowVisible === r.id ? (
                <Actions>
                  <Link to={{ pathname: '/recipients/edit', recipient: r }}>
                    Editar
                  </Link>
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
