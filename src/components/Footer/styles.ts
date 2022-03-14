import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { CentralizedFlex } from '../../styles/global';

export const Container = styled.footer`
  grid-area: footer;
  background-color: ${props => darken(0.5, props.theme.colors.secondary)};
  padding: 0.5rem 0;
  ${CentralizedFlex};

  label{
    color: ${props => lighten(1, props.theme.colors.primary)};
    font-size: 0.8rem;
    text-transform: uppercase;
  }
`;