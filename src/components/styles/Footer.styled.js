import styled from 'styled-components'

export const FooterContainer = styled.div`
    height:40vh;
    background-color:hsl(260, 8%, 14%);
    width: 1440px;
    max-width: 100%;
    padding: 0 50px;
    margin: 0 auto;
   
`

export const FooterStyling = styled.div`
    display: flex;
    justify-content: space-between;
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
        }

        img{
            margin:0 13px;
        }
    }
`
