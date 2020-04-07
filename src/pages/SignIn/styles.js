import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  background: #7d40e7 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;
  opacity: 1;

  img {
    margin-top: 50px;
  }

  Form {
    display: flex;
    flex-direction: column;
    margin: 30px 30px 50px 30px;

    text {
      text-align: left;
      letter-spacing: 0px;
      color: #444444;
      opacity: 1;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    Input {
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      height: 44px;
      margin: 0 0 10px;
      padding-left: 10px;

      &::placeholder {
        color: #00000033;
      }
    }

    span {
      color: red;
      align-self: flex-start;
      margin-bottom: 10px;
    }

    button {
      background: #7d40e7 0% 0% no-repeat padding-box;
      border-radius: 4px;
      opacity: 1;
      height: 44px;

      text-align: center;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;

      font-size: 16px;
      border: 0;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }
    }
  }
`;
