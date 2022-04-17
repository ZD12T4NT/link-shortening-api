import styled from 'styled-components'

export const Burger = styled.button`
    background-color:transparent;
    border:none;
    outline:none;
    cursor: pointer;
    display: none;

    .line{
        display: block;
        width:40px;
        height:3px;
        background-color:#000;
        margin-block:10px;
        border-radius:4px;
        transition:transform 0.3s, opacity 0.25s;

        .active .line:nth-child(1){
            transform:translateX(14px) rotate(45deg);
        }

        .active .line:nth-child(2){
            opacity: 0;
        }

        .active .line:nth-child(3){
            transform:translateX(-14px) rotate(-45deg);
        }
    }

    @media only screen and (max-width:${({ theme }) => theme.mobile}){
       display: block;
    }
`
