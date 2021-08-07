import React,{useState} from 'react';
import styled from 'styled-components';
import Nav from './nav'
import InputGroup from '../shared/inputGroup';
import Joi from 'joi-browser'
import useForm from '../shared/useForm'
import {RegisterContainer} from './register'
import banner from '../img/banner.jpg'
import { useHistory } from 'react-router-dom';
import auth from '../services/auth'

function Login({name,value}) {

    const prop= {
        "background": `url(${banner})`,
        "backgroundRepeat" : "no-repeat", 
        "backgroundSize":"cover"   
    }
    const loginData = {
        email:"",
        password:"",

    }
    const hist = useHistory()
    const submitLogin = async () =>{
        await auth.login(data)
        hist.push("/")
    }
    const loginSchema = {
        email:Joi.string().email().required(),
        password:Joi.string().required(),
    }
    
    const {data,submitHandler,changeHandler,errors} = useForm(
        {
            initialValue:loginData,
            schema:loginSchema,
            doSubmit:submitLogin
        }
    )

    return (
        <>
        <Nav/>
        <RegisterContainer style={prop}>
            <h2>Login</h2>
           <form onSubmit={submitHandler}>
              
           <InputGroup error={errors.email} onChange={changeHandler} value={data.email} name="email" label="Email" type="email"/>
               <InputGroup error={errors.password} onChange={changeHandler} value={data.password} name="password" label="Password" type="password"/>
               
                <button type='submit'>Login</button>
           </form>
        </RegisterContainer>
        </>
    );
}

// const RegisterContainer = styled.div`
//     width:80%;
//     margin:auto;
//     margin-top:3rem;
//   form{
//     width:50%;
//     margin:auto;
        
//   }

//     button{
//         border:none;
//         padding:0.7rem 1.5rem;
//         background: #01cf38;
//         color:white;
//         border-radius: 5px;
//         margin-bottom:1rem;
//         &:hover{
//             background: #00A12B;
//         }
//     }
// `



export default Login;