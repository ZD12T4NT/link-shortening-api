import styled from 'styled-components';

export const StyledInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
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
