import styled from 'styled-components';

export const StyledInput = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    
    
`

export const InputContainer = styled.div`
    background: url('./images/bg-shorten-desktop.svg') no-repeat center  ;
    width:77%;
    min-height: 160px;
    background-color:hsl(257, 27%, 26%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:10px;
    position:absolute;
    top: -80px;

    @media only screen and (max-width:${({ theme }) => theme.mobile}){
        width: 130%;
    }

    @media only screen and (max-width:${({ theme }) => theme.mobile}){
        flex-direction:column;
        text-align:center;

        input{
            margin-left:15px;
            width:90%;
        }

        button{
            margin-top:1rem;
            width:90%;
        }
    }
`

export const Input = styled.input`
    width:70%;
    margin-right:1rem;
    padding:1rem;
    border:none;
    outline:none;
    border-radius:10px;
    font-weight:700;
    font-size:1.3em;
`

export const LinkStyles = styled.div`
 width: 71%;
 display: flex;
 margin:8rem auto;
 justify-content: space-around;
 align-items: center;
 background-color:#fff;
 border-radius:10px;
 padding:10px;
 margin-bottom:0;

a{
    color:#666AF6;
    cursor: pointer;
}

 ul{
     display: flex;
     justify-content: center;
     align-items: center;



     li{
         margin:0 10px;
         
     }
 }

 @media only screen and (max-width:${({ theme }) => theme.mobile}){
        flex-direction:column;
        text-align:center;
        width: 97%;

        ul{
            flex-direction:column;
            margin:10px 0;

            li{
            margin:5px 0;

            }
        }


        

       
    }

    

`
