import styled from 'styled-components'

export const Burger = styled.button`
    background-color:transparent;
    border:none;
    outline:none;
    cursor: pointer;
    display: none;
    z-index:999;


    span{
        display: block;
        width:2rem;
        margin-bottom:7px;
        height:0.20rem;
        background-color:#000;
        border-radius:4px;
        transition:transform 0.2s, opacity 0.25s;


      
    }

    @media only screen and (max-width:${({ theme }) => theme.mobile}){
       display: block;
    }
`
