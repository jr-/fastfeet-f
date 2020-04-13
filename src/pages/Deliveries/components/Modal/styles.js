import styled from 'styled-components';

export const Container = styled.div`
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
  width: 33%;
`;

export const DeliveryInfos = styled.div`
  span {
    font-weight: bold;
  }

  p {
    margin-top: 5px;
  }
  margin-bottom: 10px;
`;

export const DateInfos = styled.div`
  span {
    font-weight: bold;
  }
  div {
    display: flex;
    flex-direction: row;
    margin-top: 5px;

    p {
      margin-left: 5px;
    }
  }
  margin-bottom: 10px;
`;
export const Signature = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: bold;
    margin: 5px 0 10px 0;
  }

  img {
    margin: 0 50px;
  }
`;
