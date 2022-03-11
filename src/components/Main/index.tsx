import React from 'react';
import { Container } from './styles';

export function Main(){
  return (
    <Container>
      <div className="content">
        <h1>Theming like a <i>boss</i></h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>
          Quae laudantium laboriosam deserunt id necessitatibus earum eaque non culpa voluptates placeat ipsa.<br/>
          Veritatis molestiae. Omnis maiores iste vero quae, corrupti animi? <br/>
          Aspernatur rerum in tenetur impedit voluptatem incidunt ipsam quas nobis porro deserunt pariatur.<br/>
          Delectus exercitationem voluptatibus id, eius aliquid maxime illum voluptas?
        </p>

        {/* <input
          type="color"
          value={primary}
          onChange={event => handleColor({ event })}
        /> */}
      </div>

      <nav>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </nav> 
    </Container>
  )
}