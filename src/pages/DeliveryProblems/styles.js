import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
`;

export const PageTitle = styled.span`
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: bold;
`;

export const TableContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 100%;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr 0.5fr;
  margin-bottom: 20px;

  &:first-child {
    font-weight: bold;
  }

  & + & {
    background: #fff;
    padding: 15px;
  }
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
  padding: 30px;
  border-radius: 20px;
`;

export const Fullscreen = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.7;
`;
