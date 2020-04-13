import React, { useState, useEffect } from 'react';

import Truncate from 'react-truncate';
import OutsideClickHandler from 'react-outside-click-handler';
import api from '~/services/api';
import Modal from './components/Modal';

import {
  Container,
  PageTitle,
  Actions,
  TableContainer,
  TableRow,
  TableColumn,
  Fullscreen,
} from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [actionsRowVisible, setActionsRowVisible] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [problemSelect, setProblemSelect] = useState('');
  useEffect(() => {
    async function loadProblems() {
      const response = await api.get('problems');

      setProblems(response.data);
    }
    loadProblems();
  }, []);

  const toggleActions = (rowId) => {
    let rowIdSet = rowId;
    if (rowId === actionsRowVisible) {
      rowIdSet = '';
    }
    const problemFind = problems.find((p) => p.id == rowIdSet);
    setProblemSelect(problemFind);
    setActionsRowVisible(rowIdSet);
  };
  const showDetails = () => {
    setActionsRowVisible('');
    setModalVisible(true);
  };
  return (
    <>
      <Container>
        <PageTitle>Problemas na entrega</PageTitle>
        <TableContainer>
          <TableRow>
            <TableColumn>Encomenda</TableColumn>
            <TableColumn>Problema</TableColumn>
            <TableColumn>Ações</TableColumn>
          </TableRow>
          {problems.map((p) => (
            <TableRow key={p.id}>
              <TableColumn>#{p.id}</TableColumn>
              <TableColumn>
                <Truncate lines={1} ellipsis={<span>...</span>}>
                  {p.description}
                </Truncate>
              </TableColumn>
              <TableColumn>
                <button type="button" onClick={() => toggleActions(p.id)}>
                  ...
                </button>
                {actionsRowVisible === p.id ? (
                  <Actions>
                    <li onClick={() => showDetails()}>Visualizar</li>
                    <li>Cancelar encomenda</li>
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
            <Modal problem={problemSelect} />
          </OutsideClickHandler>
        </>
      ) : null}
    </>
  );
}
