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
        padding:0 10px;
        color:hsl(257, 7%, 63%);
        transition:all 0.2s ease-in-out;


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

`

export const Image = styled.img`
    width: 600px;
    margin-left:40px;
`




