import styled from 'styled-components'


export const CardContainer = styled.div`
    background-color:hsl(0, 0%, 95%);
    position: relative;


    @media only screen and (max-width:${({ theme }) => theme.mobile}){
        flex-direction:column;
        text-align:center;
    }

`





