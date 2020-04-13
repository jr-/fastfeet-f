import styled from 'styled-components';

import { lighten, darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20%;
  max-width: 70%;
`;

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20px;

  input {
    border-radius: 4px;
    height: 44px;
    padding-left: 10px;

    &::placeholder {
      margin-left: 15px;
    }
  }

  text {
    text-align: left;
    letter-spacing: 0px;
    color: #444444;
    opacity: 1;
    font-size: 14px;
    font-weight: bold;
    margin: 10px 0;
  }

  Input.inputImage {
    align-self: center;
    margin-bottom: 30px;

    label {
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }

      img {
        height: 120px;
        width: 120px;
        border-radius: 50%;
        border: 3px solid rgba(255, 255, 255, 0.3);
        background: #eee;
      }

      input {
        display: none;
      }
    }
  }
`;

export const PageHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const PageActions = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PageTitle = styled.div`
  font-weight: bold;
  font-size: 17px;
  margin-left: 10px;
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
    padding-right: 14px;
  }

  &:hover {
    background: ${darken(0.07, '#7d40e7')};
  }

  &.back {
    background: ${lighten(0.2, '#7d40e7')};
    &:hover {
      background: ${darken(0.2, '#7d40e7')};
    }
  }
`;

export const LabelImg = styled.label`
  align-self: center;
  margin-bottom: 30px;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.3);
    background: #eee;
  }

  input {
    display: none;
  }
`;
