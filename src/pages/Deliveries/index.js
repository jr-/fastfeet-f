import React, { useState, useEffect } from 'react';

import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaCircle } from 'react-icons/fa';
import OutsideClickHandler from 'react-outside-click-handler';
import { format, parseISO } from 'date-fns';
import api from '~/services/api';

import { words } from '~/utils/internationalization';

import SearchBar from '~/components/SearchBar';
import Modal from './components/Modal';

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
  Fullscreen,
  CourierProfile,
} from './styles';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [actionsRowVisible, setActionsRowVisible] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [deliverySelect, setDeliverySelect] = useState('');
  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries');

      const deliveriesLoaded = response.data.map((d) => ({
        ...d,
        startDateFormatted: d.start_date
          ? format(parseISO(d.start_date), 'dd/MM/yyyy')
          : null,
        endDateFormatted: d.end_date
          ? format(parseISO(d.end_date), 'dd/MM/yyyy')
          : null,
        canceledAtFormatted: d.canceled_at
          ? format(parseISO(d.canceled_at), 'dd/MM/yyyy')
          : null,
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
    const deliveryFind = deliveries.find((d) => d.id == rowIdSet);
    setDeliverySelect(deliveryFind);
    setActionsRowVisible(rowIdSet);
  };

  const showDetails = () => {
    setActionsRowVisible('');
    setModalVisible(true);
  };

  const deleteDelivery = async () => {
    const response = await window.confirm(
      'Você tem certeza que deseja excluir esta encomenda?'
    );
    if (response) {
      const resp = await api.delete(`deliveries/${deliverySelect.id}`);
    }
  };

  const filterByProductName = async (value) => {
    const response = await api.get(`deliveries?name=${value}`);

    const deliveriesLoaded = response.data.map((d) => ({
      ...d,
      startDateFormatted: d.start_date
        ? format(parseISO(d.start_date), 'dd/MM/yyyy')
        : null,
      endDateFormatted: d.end_date
        ? format(parseISO(d.end_date), 'dd/MM/yyyy')
        : null,
      canceledAtFormatted: d.canceled_at
        ? format(parseISO(d.canceled_at), 'dd/MM/yyyy')
        : null,
      status: words[d.status].br,
    }));

    setDeliveries(deliveriesLoaded);
  };

  return (
    <>
      <Container>
        <PageTitle>Gerenciando encomendas</PageTitle>
        <PageActions>
          <SearchBar
            text="Buscar por encomendas"
            onChange={filterByProductName}
          />
          <Link to={{ pathname: '/delivery/add' }}>
            <Button type="button">
              <div>
                <MdAdd size={16} color="#FFF" />
              </div>
              <span>CADASTRAR</span>
            </Button>
          </Link>
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
              <TableColumn>#{d.id}</TableColumn>
              <TableColumn>{d.recipient.name}</TableColumn>
              <TableColumn>
                <CourierProfile>
                  <img
                    src={
                      d.courier.avatar.url ||
                      'https://api.adorable.io/avatars/100/abott@adorable.png'
                    }
                    alt=""
                  />
                  <text>{d.courier.name}</text>
                </CourierProfile>
              </TableColumn>
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
                    <li onClick={() => showDetails()}>Visualizar</li>
                    <Link to={{ pathname: '/delivery/edit', delivery: d }}>
                      Editar
                    </Link>
                    <li onClick={() => deleteDelivery()}>Excluir</li>
                  </Actions>
                ) : null}
              </TableColumn>
            </TableRow>
          ))}
        </TableContainer>
      </Container>
      {modalVisible ? (
        <>
          <Fullscreen />
          <OutsideClickHandler onOutsideClick={() => setModalVisible(false)}>
            <Modal delivery={deliverySelect} />
          </OutsideClickHandler>
        </>
      ) : null}
    </>
  );
}
