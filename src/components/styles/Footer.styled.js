import styled from 'styled-components'

export const FooterContainer = styled.div`
    min-height:40vh;
    background-color:hsl(260, 8%, 14%);
    width: 1440px;
    max-width: 100%;
    padding: 0 50px;
    margin: 0 auto;

    @media only screen and (max-width:${({ theme }) => theme.mobile}){
       flex-direction:column;
       text-align:center;

    }
   
`

export const FooterStyling = styled.div`
    display: flex;
    align-items: center;
    height:100%;

    div{
        flex:1;        
        height:200px;
       
       
        span{
            color:#fff;
            margin-bottom:30px;
            display:block;
        }

        li{
            margin:15px 0;
        }

        li a{
            color:hsl(257, 7%, 63%);
            transition:all 0.3s ease-in-out;

            &:hover{
                opacity:0.7;
            }
        }

        img{
            margin:0 13px;
        }
    }

    @media only screen and (max-width:${({ theme }) => theme.mobile}){
     display: block;
    
     div{
        display: flex;
        justify-content: center;
        align-items: center;
     }

    }
`
