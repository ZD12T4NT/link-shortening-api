import React from 'react'
import { Container } from './styles/Container.styled'
import { Nav, StyledHeader, Logo } from './styles/Header.styled'
// import { Button } from './styles/Button.styled'

export const Header = () => {
  return (
    <StyledHeader>
        <Container>
          <Nav>
            <Logo src='./images/logo.svg'/>
             <li>
               <a href="/">features</a>
             </li>
             <li>
               <a href="/">pricing</a>
             </li>
             <li>
               <a href="/">resources</a>
             </li>
          </Nav>
          {/* <Button>Login</Button>
          <Button>Sign Up</Button> */}
        </Container>
    </StyledHeader>


  )
}
