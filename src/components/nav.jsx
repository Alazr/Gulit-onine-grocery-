import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { mobileChanged } from '../store/ul';
import cartImg from '../img/cart.png'

function Nav(props) {
    const dispatch = useDispatch()
    const { pathname, search } = useLocation()
    const [isdropdown, setIsDropdown] = useState(false)
    const category = useSelector(state => state.entities.category)
    const cart = useSelector(state => state.entities.cart)
    const user = useSelector(state=>state.auth.currentUser)
    const keys = Object.keys(cart)

    const { isMobile } = useSelector(state => state.ui)
    const mouseHandler = () => {
        dispatch(mobileChanged({ value: false }))
    }
    const burgerHandler = () => {
        if (isMobile) {
            dispatch(mobileChanged({ value: false }))
        } else {
            dispatch(mobileChanged({ value: true }))
        }
    }
    const clickHandler = () => {
        setIsDropdown(!isdropdown)
    }
    const mouseLeaveHandler = () => {
        setIsDropdown(false)
    }
    return (
        <NavHeader className={pathname !== "/" || search ? "non-home" : ''}>
            <Navbar >
            <Link to="/"><h3 id="logo">Gulit</h3></Link>
                
                <ListItems className="main_list">
                    <li><Link to="/">Home</Link></li>
                    <Dropdown  >
                        <button onClick={clickHandler} className="drop">Category</button>
                        <ul onMouseLeave={mouseLeaveHandler} className={isdropdown ? "active" : ""}>
                            {
                                category.map(item => (
                                    <li key={item._id} className="dropdown-list"><Link to={`/?category=${item.name}`} >{item.name}</Link></li>
                                ))
                            }
                        </ul>
                    </Dropdown>
                </ListItems>
                <Burger onClick={burgerHandler} className={isMobile ? "toggle" : ""}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </Burger>
                <ListItems onMouseLeave={mouseHandler} className={`auth ${isMobile ? "active" : ""}`}>
                   {!user &&
                       <>
                         <Btn className="solid"><Link to="/register">Register</Link></Btn>
                    <Btn className="tran"><Link to="/login">Login</Link></Btn>
                       </>
                   }
                   {user &&
                       <>
                         <Btn className="solid"><Link to="/">{user.name}</Link></Btn>
                    <Btn className="tran"><Link to="/logout">Logout</Link></Btn>
                       </>
                   }
                    <li><Link to="/cart"><Cart>
                        <img src={cartImg} alt="cart" />
                        {
                            keys.length > 0 &&
                            (<span>{keys.length}</span>)
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
    flex-wrap:wrap;
    h3{
        flex-basis:10rem;
    }
   
    @media screen and (max-width:768px){
    width:95%;
    h3{
        
        flex-basis:10rem;
    }

}
    @media screen and (max-width:530px){
    /* h3{
        
    } */
    width:90%;
    justify-content: space-between;


}
    @media screen and (max-width:312px){
    text-align: center;
    h3{
        flex-basis: 7rem;
    }

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
    @media screen and (max-width:768px){
        &.main_list{
            width:20rem;
            li{
                margin:0 1rem;
            }
            }
        &.auth{
            /* width:20rem; */
            li{
                margin:0 1rem;
                /* display: none; */
            }
        }

    }
    @media screen and (max-width:530px){
    &.auth{
        opacity: 0;
        pointer-events: none;
        background:rgba(0,0,0,0.5);
    position: fixed;
    min-height: 15rem;
    border-radius: 10px;
    z-index:100;
    width:10rem;
    right:0%;
    top:7vh;
    flex-direction: column;
    justify-content: space-around;
    transition: all 0.4s ease;
        transform: translateY(10px);
        .solid,.tran{
            padding:0;
            background: none;
            border: none;
            a{
                color:white;
            }
        }
        }
        &.auth.active{
            opacity: 1;
            pointer-events: all;
        transform: translateY(0px);
        }

      
    }

@media screen and (max-width:312px){
      &.main_list{  
          width:10rem;
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
z-index: 100;
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
const Burger = styled.div`
    display:none;
    cursor:pointer;
    @media screen and (max-width:530px){
        display: block;
    position: relative;
    z-index: 3;
  span {
    background: white;
    padding: 0.1rem 0.8rem;
    display: block;
    margin: 0.3rem 0rem;
  }

  
  }


`

export default Nav;