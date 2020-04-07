import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';

import { Container, Content, Profile, NavLink } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [tab, setTab] = useState('deliveries');

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <NavLink
            to="/deliveries"
            clicked={tab === 'deliveries'}
            onClick={() => {
              setTab('deliveries');
            }}
          >
            ENCOMENDAS
          </NavLink>
          <NavLink
            to="/deliveries"
            clicked={tab === 'courier'}
            onClick={() => {
              setTab('courier');
            }}
          >
            ENTREGADORES
          </NavLink>
          <NavLink
            to="/deliveries"
            clicked={tab === 'recipients'}
            onClick={() => {
              setTab('recipients');
            }}
          >
            DESTINATÁRIOS
          </NavLink>
          <NavLink
            to="/deliveries"
            clicked={tab === 'problems'}
            onClick={() => {
              setTab('problems');
            }}
          >
            PROBLEMAS
          </NavLink>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{user.name}</strong>
              <button type="button" onClick={handleSignOut}>
                sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
