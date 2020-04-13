import React from 'react';

import { Container } from './styles';

export default function Modal({ problem }) {
  return (
    <Container>
      <span>VISUALIZAR PROBLEMA</span>
      <p>{problem.description}</p>
    </Container>
  );
}
