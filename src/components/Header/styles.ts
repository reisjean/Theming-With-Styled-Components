import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: header;
  padding: 0 2rem;
  background-color: ${props => lighten(0.1, props.theme.colors.primary)};

  .logo{
      width: 110px;

      ellipse{
        fill: ${props => darken(0.05, props.theme.colors.primary)};
        stroke: ${props => darken(0.2, props.theme.colors.primary)};

        stroke-width: 1px;
      }

      path{
        fill: ${props => darken(0.2, props.theme.colors.primary)};
      }
  }
`;