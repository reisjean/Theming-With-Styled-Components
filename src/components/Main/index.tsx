import React from 'react';
import { Container } from './styles';
import { Nav } from '../Nav'

export function Main(){
  return (
    <Container aria-label='teste'>
      <div className="content">
        <h1>Theming like a <i>boss</i></h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>
          Quae laudantium laboriosam deserunt id necessitatibus earum eaque non culpa voluptates placeat ipsa.<br/>
          Veritatis molestiae. Omnis maiores iste vero quae, corrupti animi? <br/>
          Aspernatur rerum in tenetur impedit voluptatem incidunt ipsam quas nobis porro deserunt pariatur.<br/>
          Delectus exercitationem voluptatibus id, eius aliquid maxime illum voluptas?
        </p>
      </div>

      <Nav/>
    </Container>
  )
}