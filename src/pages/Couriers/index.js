import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { MdAdd } from 'react-icons/md';

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
  ProfilePicture,
} from './styles';

export default function Couriers() {
  const [couriers, setCouriers] = useState([]);
  const [actionsRowVisible, setActionsRowVisible] = useState('');
  useEffect(() => {
    async function loadCouriers() {
      const response = await api.get('couriers');
      setCouriers(response.data);
    }
    loadCouriers();
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
      <PageTitle>Gerenciando entregadores</PageTitle>
      <PageActions>
        <SearchBar text="Buscar por entregadores" />
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
          <TableColumn>Foto</TableColumn>
          <TableColumn>Nome</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Ações</TableColumn>
        </TableRow>
        {couriers.map((c) => (
          <TableRow key={c.id}>
            <TableColumn>#{c.id}</TableColumn>
            <TableColumn>
              <ProfilePicture
                src={
                  c.avatar.url ||
                  'https://api.adorable.io/avatars/100/abott@adorable.png'
                }
                alt=""
              />
            </TableColumn>
            <TableColumn>{c.name}</TableColumn>
            <TableColumn>{c.email}</TableColumn>
            <TableColumn>
              <button type="button" onClick={() => toggleActions(c.id)}>
                ...
              </button>
              {actionsRowVisible === c.id ? (
                <Actions>
                  <Link to={{ pathname: '/couriers/edit', courier: c }}>
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
