import React from 'react';
import { Container } from './styles';

export function Nav(){
  return (
    <Container>
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>How to</li>
        <li>Products</li>
      </ul>
    </Container> 
  );
}