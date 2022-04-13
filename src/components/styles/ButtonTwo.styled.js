import styled from 'styled-components'

export const ButtonTwo = styled.button`
    padding:1rem 1.5rem;
    border-radius:10px;
    border:none;
    cursor: pointer;
    color:${({ color }) => color || '#333'};
    font-size:1.3em;
    transition:all 0.2s ease-in-out;
    background-color:${({ bg }) => bg || '#fff'};
    font-weight:700;

    &:hover{
    opacity:0.8;
    }
`
