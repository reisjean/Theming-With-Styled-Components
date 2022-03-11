import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  margin-left: 42%;

  input[type=color]{
    width: 30px;
    height: 30px;
    border: none;
    overflow: hidden;
    background: none;
    outline: none;
  }
`;

export const ComponentButton = styled.button`
  font-size: 1rem;
  padding: 1rem 2rem;
  background: ${props => darken(0.2, props.theme.colors.primary)};
  color: ${props => props.theme.colors.text};
  border: 2px solid ${props => lighten(0.25, props.theme.colors.primary)};
  border-radius: 2px;
`;