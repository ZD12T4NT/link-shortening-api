import React from "react";
import { BoostStyle } from "./styles/Boost.styled";
import { Button } from "./styles/Button.styled";
import { Container } from './styles/Container.styled'

export const Boost = () => {
  return (
      <BoostStyle>
          <Container>
              <div>
                <h2>Boost your links today</h2>
                <Button bg='#666AF6' color='#fff'>Get Started</Button>
              </div>
          </Container>
      </BoostStyle>
      
  )
};
