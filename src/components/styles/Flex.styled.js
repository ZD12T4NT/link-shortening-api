import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
    align-items: center;
    height:80vh;


    & > div,
    & > ul {
        flex:1;

        h1{
            font-size:3.8rem;
            margin-bottom:0.7rem;
            color:hsl(260, 8%, 14%);
        }

        p{
            font-size:1.5rem;
            margin-bottom:1.5rem;
            color:hsl(257, 7%, 63%);
        }

       
    }

    @media only screen and (max-width:${({ theme }) => theme.mobile}){
        flex-direction:column;
        text-align:center;
    }
`
