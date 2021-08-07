import React from 'react';
import styled from 'styled-components';
import Nav from './nav'
import InputGroup from '../shared/inputGroup';
import Joi from 'joi-browser'
import useForm from '../shared/useForm'
import banner from '../img/banner.jpg'
import { useHistory } from 'react-router-dom';
import {registerUser} from '../services/user'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {toast} from 'react-toastify'
import auth from '../services/auth'

function Register() {
    const prop= {
        "background": `url(${banner})`,
        "backgroundRepeat" : "no-repeat", 
        "backgroundSize":"cover"       
    }
    const registerSchema = {
        name:Joi.string().min(3).required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(5).required(),
        confirm:Joi.string().valid(Joi.ref("password")).required().options({
            language: {
              any: {
                allowOnly: '!!Passwords do not match',
              }
            } 
          })
    }
    const acc = {
        name:"",
        email:"",
        password:"",
        confirm:""
    }
    const hist = useHistory()
    const submitRegister = async ()=>{

        try {
            const res = await registerUser(data) 
            auth.loginWithJwt(res.headers["x-auth-token"])
            hist.push("/")
            
        } catch (ex) {
           if(ex.response && ex.response.status === 400){
               toast.error(ex.response.data)
           }
        
        }
        
    }
    const {data,submitHandler,changeHandler,errors} = useForm(
        {
            initialValue:acc,
            schema:registerSchema,
            doSubmit:submitRegister
        }
    )


    return (
        <>
        <Nav/>
        <ToastContainer/>
        <RegisterContainer style={prop}>
            <h2>Register</h2>
           <form onSubmit={submitHandler}>
               <InputGroup error={errors.name}  onChange={changeHandler} value={data.name} name="name" label="UserName" type="text"/>
               <InputGroup error={errors.email} onChange={changeHandler} value={data.email} name="email" label="Email" type="email"/>
               <InputGroup error={errors.password} onChange={changeHandler} value={data.password} name="password" label="Password" type="password"/>
               <InputGroup error={errors.confirm} onChange={changeHandler} value={data.confirm} name="confirm" label="Confirm password" type="password"/>
                <button type='submit'>Register</button>
           </form>
           {/* <p>Do you have an account?</p> */}
        </RegisterContainer>
        </>
    );
}

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    height:90vh;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        top:0;
        left:0;
        height:90vh;
        width:100%;
        background: rgba(0,0,0,0.5);
        z-index:0;
    }
    h2{
        color:#fff;
        margin:1rem 0;
        z-index: 2;
    }
  form{
      max-height:80vh;
      z-index:2;
    background: white;
    width:35%;
    padding:1rem 1.2rem;
    border-radius: 10px;
        text-align: center;
        @media screen and (max-width:768px){
    width:80%;
 
  }
  @media screen and (max-width:521px){
    width:90%;

}
  }

    button{
        border:none;
        padding:0.7rem 1.5rem;
        background: #01cf38;
        color:white;
        border-radius: 5px;
        margin-bottom:1rem;
        &:hover{
            background: #00A12B;
        }
        
    }
`

export default Register;