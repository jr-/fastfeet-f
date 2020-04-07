import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import api from '~/services/api';

// import { Container } from './styles';

export default function Deliveries() {
  api.get('deliveries');
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Destinatário</TableCell>
            <TableCell>Entregador</TableCell>
            <TableCell>Cidade</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key="inserir">
            <TableCell>#01</TableCell>
            <TableCell>Ludwig van Beethoven</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>Floripa</TableCell>
            <TableCell>Santa Catarina</TableCell>
            <TableCell>Entregue</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
