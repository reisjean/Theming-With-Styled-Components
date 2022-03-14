import styled from 'styled-components';
import { lighten, saturate } from 'polished';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: header;
  padding: 0 2rem;
  background-color: ${props => lighten(0.2, props.theme.colors.secondary)};

  .logo{
      width: 110px;

      .cls-1{
        fill: ${props => props.theme.colors.primary};
      }
      
      .cls-2{
        fill: ${props => lighten(0.2, saturate(0.1, props.theme.colors.primary))};
      }
      
      .cls-3{
        fill: ${props => lighten(0.7, props.theme.colors.primary)};
      }
      
      .cls-4{
        fill: ${props => lighten(0.6, props.theme.colors.primary)};
      }

      .cls-5{
        fill: ${props => lighten(0.2, saturate(0.1, props.theme.colors.primary))};
      }
  }
`;