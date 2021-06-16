import React from 'react';
import styled from 'styled-components'
function InputGroup({name,label,type,value,onChange,error}) {
    return (
        <FormGroup>
            <label htmlFor={name}>{label}:</label>
            <input value={value} onChange={onChange} type={type} id={name} name={name} />
            {
                error && 
                (
                    <Error>{error}</Error>
                ) 
            }
        </FormGroup>
    );
}
const FormGroup = styled.div`
    margin:2rem 0;    
    text-align: left;
    
    label{
        display: block;
        margin-bottom:0.5rem;
        font-size: 1.8rem;
    }
    input{
        width:100%;
        padding:0.8rem 1rem;
        border:1px solid #ccc;
        font-size: 1.6rem;
        color:#333;
        border-radius: 5px;
        &:focus{
            outline: none;
            border-color: #74b9ff;
            box-shadow: 0 0 3px #3797f7;
        }
    }

`

const Error = styled.div`

    background:rgba(251,201,201,1);
    margin-top: 0.7rem;
    font-size:1.2rem;
    border-radius:5px;
    color:#333;
    padding:0.4rem 1rem;

    /* height:4rem; */
`
export default InputGroup;