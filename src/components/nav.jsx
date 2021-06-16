import { truncate } from 'lodash';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import cartImg from '../img/cart.png'

function Nav(props) {
    const {pathname,search} = useLocation()
    const [isdropdown,setIsDropdown] = useState(false) 
    const {cart,category} = useSelector(state=>state.products)


    const clickHandler = () =>{
        setIsDropdown(!isdropdown)
    }
    const mouseLeaveHandler = () =>{
        setIsDropdown(false)
    }
    return (
        <NavHeader className={pathname !== "/" || search ? "non-home": ''}>
            <Navbar >
                <h3 id="logo">Gulit</h3>
                <ListItems className="main_list">
                    <li><Link to="/">Home</Link></li>
                    <Dropdown  >
                        <button onClick={clickHandler} className="drop">Category</button>
                        <ul onMouseLeave={mouseLeaveHandler} className={isdropdown? "active":""}>
                            {
                                category.map(item=>(
                                    <li key={item.id} className="dropdown-list"><Link to={`/?category=${item.name}`} >{item.name}</Link></li>
                                ))
                            }
                        </ul>
                    </Dropdown>
                    
                </ListItems>
                <ListItems className="auth">
                    <Btn className="solid"><Link to="/register">Register</Link></Btn>
                    <Btn className="tran"><Link to="/login">Login</Link></Btn>
                    <li><Link to="/cart"><Cart>
                    <img src={cartImg} alt="cart" />
                    {
                        cart.length > 0 &&
                    (<span>{cart.length}</span>)
                    }
                        </Cart></Link></li>
                </ListItems>
            </Navbar>
        </NavHeader>
    );
}
const Cart = styled.div`
    position: relative;
    span{
        position:absolute;
        top:-15%;
        right:-15%;
        color:#A3000A;
        background: white;
        border-radius: 100%;
        padding:0.5rem;
        display:flex;
        align-items: center;
        justify-content: center;
        height:20px;
        width:20px;
        font-size:1.2rem;
        font-weight: bold;
    }

`
const NavHeader = styled.div`
    &.non-home{
        background: #02be34;
        a{
            color:white;
        }
        nav{
            padding:0;
        }
        li{
            background:transparent;
            border:none;
            border-radius: 5px;
            transition:all 0.3s ease;
        }
        .solid{
            &:hover{
                border:none;
            }
        }
        .tran{
            a{
            color:white;
            }
            &:hover{
                background: white;
                a{
                    color:#333;
                }
            }
        }
        #logo{
            color:white;
        }
    }
   
`

const Navbar = styled.nav`  
    width: 90%;
    margin: auto;
    padding: 2rem 0;
    min-height:10vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h3{
        flex-basis:15rem;
    }
   
    
`

const ListItems = styled.ul`
    display: flex;
    align-items: center;
    transition: all 0.2s ease;

   
    &.main_list{
    width:30rem;
    flex:1;
    justify-content: flex-start;
    li{
        margin:0 2rem;
        &:hover{
        a{
            color: #00ED3F;
        }
    }
    }
   
    }
    &.auth{
        justify-content: space-around;
        li{
            margin: 0 1.5rem;
        }
        img{
            width:70%;
            margin-top: 0.5rem;
        }
    }
`
const Btn = styled.li`
    padding:0.5rem 1rem;
    cursor:pointer;
    transition: all 0.2s ease;
    a{
        text-shadow: none;
    }
    &.solid{
        background: #00A12B;
        a{
        color:#fff;

        }
        &:hover{
            background: white;
            border: 1px solid #00A12B;
            a{
                color:#00A12B
            }
        }
    }
    &.tran{
        border:1px solid #00A12B;
        background: white;
        a{
        color:#00A12B ;
        }
        &:hover{
            background: #00A12B;
        a{
        color:#fff;

        }
        }
    }

`
const Dropdown = styled.div`
position: relative;
    .drop{
        margin:0 2rem;
        cursor: pointer;
        background: none;
        border:none;
        color:#fff;
        letter-spacing: 1px;
        font-family: 'Open Sans', sans-serif;
        &:hover{
            color: #00ED3F;
        }
        
    }
    a{
        display: block;
    }
    ul{
        position:absolute;
        background: rgba(0,0,0,0.5);
        margin-top: 5px;
        width:170px;
        left: 15%;
        border-radius: 5px;
        opacity:0;
        pointer-events: none;
        transition: all 0.4s ease;
        transform: translateY(10px);
        overflow:hidden;
        a{
            color:#fff;
            text-shadow: none;
        }
        &.active{
            opacity:1;
            pointer-events: all;
            transform: translateY(0px);
        }
        

        .dropdown-list{
            width:100%;
            padding:0.5rem 1rem;
            margin-left:0;
            cursor: pointer;
           &:hover{
            background: #00ED3F;
            a{
                color:#fff;
            }
           }
        }
    }
`


export default Nav;