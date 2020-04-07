import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;

  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      height: 26px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: center;
    margin-right: 10px;
    display: flex;
    flex-direction: column;

    strong {
      display: block;
      color: #333;
    }

    button {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: red;
      align-self: center;
    }
  }
`;

export const NavLink = styled(Link)`
  font-weight: bold;
  color: ${(props) => (props.clicked ? '#000' : '#777777')};

  & + & {
    margin-left: 10px;
  }
`;
