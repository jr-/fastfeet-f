import styled from 'styled-components';

import { FaCircle } from 'react-icons/fa';
import { lighten } from 'polished';

export const Container = styled.div`
  padding: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
`;

export const PageActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const PageTitle = styled.span`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const Button = styled.button`
  background: #7d40e7 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  color: #fff;

  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    padding: 6px 0px 6px 14px;

    svg {
      margin-right: 5px;
    }
  }

  span {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding-right: 20px;
  }
`;

export const TableContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 100%;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(5, 2fr) 0.5fr;
  margin-bottom: 20px;

  &:first-child {
    font-weight: bold;
  }

  & + & {
    background: #fff;
    padding: 15px;
  }

  /* display: flex;
  flex-direction: row; */
`;

export const TableColumn = styled.div`
  &:last-child {
    text-align: right;
    margin-right: 10px;
  }
`;

export const Actions = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

const spanStatusColor = {
  entregue: '#2ca42b',
  cancelada: '#DE3B3B',
  pendente: '#C1BC35',
  retirada: '#4D85EE',
};

export const LabelStatus = styled.div`
  display: flex;
  flex-direction: row;
  display: inline-block;
  svg {
    margin: 0 5px;
  }
  color: ${(props) => spanStatusColor[props.status]};

  background: ${(props) => lighten(0.3, spanStatusColor[props.status])};
  padding: 6px 10px 6px 6px;
  border-radius: 12px;
  font: 13px 'Roboto', sans-serif;
  font-weight: bold;
`;
