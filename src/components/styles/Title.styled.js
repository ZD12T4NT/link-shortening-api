import styled from 'styled-components'

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;

    h2{
    margin-top:15rem;
    width:350px;
    text-align:center;
    margin-bottom:0.7rem;
    font-size:2rem;
    color:hsl(260, 8%, 14%);
    }

    p{
    width:470px;
    text-align:center;
    color:hsl(257, 7%, 63%);
    
    }

    @media only screen and (max-width:${({ theme }) => theme.mobile}){
        p{
            width:400px;
        }

    }
`
