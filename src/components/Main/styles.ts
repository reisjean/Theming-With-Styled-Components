import styled from 'styled-components';
import { darken, lighten, transparentize, saturate } from 'polished';
import { CentralizedFlex } from '../../styles/global';
import bg from '../../images/bg.jpeg';

export const Container = styled.main`
  grid-area: main;
  display: grid;
  grid-template-areas: "nav" "content";
  grid-template-rows: auto 1fr;
  background-image: url(${bg});

  .content{
    grid-area: content;
    background-color: ${props => darken(0.1, saturate(0.8, transparentize(0.2, props.theme.colors.primary)))};
    
    ${CentralizedFlex};
    flex-flow: column;

    h1{
      color: ${props => lighten(0.25, props.theme.colors.primary)};
      font-size: 7rem;
    }

    p{
      font-size: 1.4rem;
      text-align: center;
      line-height: 1.1;
      color: ${props => darken(0.4, props.theme.colors.primary)};
      margin: 2rem 0;
      background-color: ${props => transparentize(0.8, props.theme.colors.primary)};
      padding: 1rem 2rem;
      border: 2px solid ${props => transparentize(0.7, props.theme.colors.primary)};
    }
  }

  nav{
    grid-area: nav;
    background-color: ${props => darken(0.2, props.theme.colors.primary)};
    padding: 0.6rem 2rem;

    ul{
      display: flex;
      align-items: center;
      justify-content: center;
      
      li{
        padding: 0 1rem;
        color: ${props => lighten(0.2, props.theme.colors.primary)}
      }
    }
  }
`;