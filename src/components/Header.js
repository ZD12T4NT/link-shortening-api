import React, { useState } from 'react'
import { Nav, StyledHeader, Logo, Navbar, Image } from './styles/Header.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'
import { Burger } from './styles/Burger.styled'

export const Header = () => {

  const [open, setOpen] = useState(false)

  return (
    <StyledHeader>
          <Nav>
          <Logo src='./images/Shorty.svg'/>
            <Navbar open={open}>
             <li>
               <a href="/">features</a>
             </li>
             <li>
               <a href="/">pricing</a>
             </li>
             <li>
               <a href="/">resources</a>
             </li>
             </Navbar>
          <Navbar>
          <Button>Login</Button>
          <Button bg='#666AF6' color='#fff'>Sign Up</Button>
          </Navbar>
          <Burger open={open} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </Burger>
          </Nav>
          <Flex>
            <div>
              <h1>More than just shorter links.</h1>
              <p>Build your brands recognition and get detailed insights on how your links are performing.</p>
          <Button bg='#666AF6' color='#fff'>Get Started</Button>
            </div>
            <Image src="./images/13.svg" alt="" />
          </Flex>
    </StyledHeader>


  )
}
