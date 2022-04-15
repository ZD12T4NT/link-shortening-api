import React from "react";
import { Cards } from "./Cards";
import { LinkInput } from "./LinkInput";
import { CardContainer } from "./styles/Card.styled";
import { Container } from './styles/Container.styled'
import { Title } from "./styles/Title.styled";


export const Card = () => {
  return (
    <CardContainer>
      <Container>
       <LinkInput />
        <Title>
          <h2>Advanced Statistics</h2>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </Title>
        <Cards />
      </Container>  
    </CardContainer>

  )
};
