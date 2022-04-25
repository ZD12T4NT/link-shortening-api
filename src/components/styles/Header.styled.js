import styled from 'styled-components'

export const StyledHeader = styled.div`
    background-color:${({ theme }) => theme.colors.header};
    padding: 40px 20px;

    @media only screen and (max-width:${({ theme }) => theme.mobile}){  
        padding:40px 0;
    }
  
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

    @media only screen and (max-width:${({ theme }) => theme.mobile}){  
        flex-flow: column nowrap;
        background-color: #DEDEDE;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        align-items:flex-start;
        justify-content: center;

        li{
            margin:2rem 0;

            &:nth-child(3){
            margin-bottom:10rem;

            }
        }
        

        a{
        color:#000;

        &:hover{
            opacity: 0.5;
        }
        }
    }
`

export const Logo = styled.img`
    width: 150px;
`

export const Image = styled.img`
    width: 635px;
    margin-left:40px;

    @media only screen and (max-width:${({ theme }) => theme.mobile}){  
        width:550px;
    }
`




