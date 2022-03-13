import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.nav`
  grid-area: nav;
  background-color: ${props => darken(0.25, props.theme.colors.secondary)};
  padding: 0.6rem 2rem;

  ul{
    display: flex;
    align-items: center;
    justify-content: center;
    
    li{
      padding: 0 1rem;
      color: ${props => lighten(0.2, props.theme.colors.secondary)};
    }
  }
`;