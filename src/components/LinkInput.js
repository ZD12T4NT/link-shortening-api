import React from "react";
import { StyledInput, InputContainer ,Input } from "./styles/LinkInput.styled";
import { Container } from './styles/Container.styled'
import { ButtonTwo } from "./styles/ButtonTwo.styled";

export const LinkInput = () => {
  return (
    <Container>
        <StyledInput>
          <InputContainer>
              <Input required placeholder="Shorten link here..."/>
              <ButtonTwo bg="#666AF6" color="#fff">Shorten It!</ButtonTwo>
           </InputContainer>
        </StyledInput>
    </Container>

   
  )
 
};
