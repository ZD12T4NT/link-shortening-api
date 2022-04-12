import styled from 'styled-components'

export const Button = styled.button`
    padding:10px 20px;
    border-radius:20px;
    border:none;
    cursor: pointer;
    color:${({ color }) => color || '#333'};
    font-size:18px;
    transition:all 0.2s ease-in-out;
    background-color:${({ bg }) => bg || '#fff'};
    font-weight:700;

    &:hover{
    opacity:0.8;

    }
`
