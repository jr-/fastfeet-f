import styled from 'styled-components';

export const Container = styled.div`
  width: 33%;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translate(-50%, -50%);
  background: #fff;
  opacity: 1;

  span {
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
