import styled from 'styled-components'

export const CardsContainer = styled.div`
height:70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:2rem;

    div:nth-of-type(2){
        margin-top:5rem;
    }

    div:nth-of-type(3){
        margin-top:10rem;
    }

    div{
        background-color:#fff;
        border-radius:10px;
        height:250px;
        width:350px;
        padding:65px 20px 0 40px;
        position: relative;
        margin:0 20px 0 0;

        h3{
            text-transform:capitalize;
            margin-bottom:10px;
            color:hsl(260, 8%, 14%);

        }

        p{
            color:hsl(257, 7%, 63%);

        }

        img{
            position:absolute;
            top:-20px;
            left:60px;
            background-color:hsl(257, 27%, 26%);
            width:60px;
            padding: 15px;
            border-radius:50%;
        }

       
    }
`
