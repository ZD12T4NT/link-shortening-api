import React, { useEffect, useState } from "react";
import { StyledInput, InputContainer ,Input, LinkStyles } from "./styles/LinkInput.styled";
import { Container } from './styles/Container.styled'
import { ButtonTwo } from "./styles/ButtonTwo.styled";

const storedLinks = () => {
  let links = localStorage.getItem('links')

  if(links) {
    return JSON.parse(localStorage.getItem('links'))
  } else {
    return []
  }
}

export const LinkInput = () => {

  const [text, setText] = useState("")
  const [links, setLinks] = useState(storedLinks)
  const [buttonText, setButtonText] = useState('Copy')

  const onSubmit = (e) => {
    e.preventDefault();
  }

  if (!text){

  } else {
    const shortenLink = async () => {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
      const data = await res.json()

      console.log(data.result);

      setLinks(data.result)
      setText('')
    }

    shortenLink()
  }

  const copy = () => {
    navigator.clipboard.writeText(links.full_short_link)
    setButtonText('Copied!')
  }

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links))
  }, [links])
  
  return (
    <>
    <Container>
        <StyledInput onSubmit={onSubmit}>
          <InputContainer>
              <Input type="url" value={text} onChange={(e) => setText(e.target.value)} placeholder="Shorten link here..." required />
              <ButtonTwo onClick={onSubmit} type="submit" bg="#666AF6" color="#fff">Shorten It!</ButtonTwo>
           </InputContainer>
         </StyledInput>
        </Container>
        <LinkStyles>
            <h4>{links.original_link}</h4>
              <ul>
                <li>
                  <a>
                {links.full_short_link}
                  </a>
                </li>
                <li>
            <ButtonTwo onClick={copy} bg="#666AF6" color="#fff" >{buttonText}</ButtonTwo>
                </li>
              </ul>            
           </LinkStyles>
      </>


   
  )
 
};
