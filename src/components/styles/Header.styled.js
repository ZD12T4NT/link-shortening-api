import styled from 'styled-components'

export const StyledHeader = styled.div`
    background-color:${({ theme }) => theme.colors.header};
    padding: 40px 0;
  
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
        margin: 0 15px;
        color:hsl(257, 7%, 63%);
        transition:all 0.2s ease-in-out;
        text-transform:capitalize;


        &:hover{
            color:#000;
        }
    }
`

export const Navbar = styled.ul`
    display: flex;
    align-items: center;
`

export const Logo = styled.img`
width: 150px;
`

export const Image = styled.img`
    width: 635px;
    margin-left:40px;
`




