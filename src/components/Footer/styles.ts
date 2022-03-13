import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { CentralizedFlex } from '../../styles/global';

export const Container = styled.footer`
  grid-area: footer;
  background-color: ${props => darken(0.2, props.theme.colors.secondary)};
  padding: 0.5rem 0;
  ${CentralizedFlex};

  label{
    color: ${props => lighten(0.35, props.theme.colors.primary)};
  }
`;