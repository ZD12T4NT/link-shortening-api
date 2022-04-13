import React from "react";
import { CardStyles, CardHeader } from "./styles/Card.styled";
import { Container } from "./styles/Container.styled";

export const Card = ({item: {id, image, title, body}}) => {
  return (
      <Container>
          <CardHeader>
                <h1>advanced statistics</h1>
                <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
          </CardHeader>
          <CardStyles>
          <div>
             <img src={`./images/${image}`} alt="" />
             <h2>{title}</h2>
             <p>{body}</p>
          </div>
          </CardStyles>
      </Container>
  )
};
