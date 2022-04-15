import React from "react";
import { CardsContainer } from "./styles/Cards.styled";
import { Container } from './styles/Container.styled'


export const Cards = () => {
  return (
      <>
        <Container>
            <CardsContainer>
                <div>
                    <img src="./images/icon-brand-recognition.svg" alt="" />
                    <h3>brand recognition</h3>
                    <p>Boos your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div>
                    <img src="./images/icon-detailed-records.svg" alt="" />
                    <h3>detailed records</h3>
                    <p>Gain highlights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <div>
                    <img src="./images/icon-fully-customizable.svg" alt="" />
                    <h3>fully customizable</h3>
                    <p>Imporve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </CardsContainer>
        </Container>

      </>
  )
};
