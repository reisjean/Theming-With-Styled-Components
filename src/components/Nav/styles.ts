import styled from 'styled-components';
import { darken, lighten, saturate } from 'polished';

export const Container = styled.nav`
  grid-area: nav;
  background-color: ${props => darken(0.15, props.theme.colors.secondary)};
  padding: 1rem;

  ul{
    display: flex;
    align-items: center;
    justify-content: center;
    
    li{
      padding: 0 1rem;
      font-size: 1rem;
      color: ${props => lighten(0.2, props.theme.colors.secondary)};
      cursor: pointer;
      transition: all 0.2s ease;

      &:first-child{
        font-weight: bold;
      }

      &:hover{
        color: ${props => saturate(0.2, props.theme.colors.primary)};
      }
    }
  }
`;