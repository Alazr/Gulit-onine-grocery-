import React,{useEffect} from 'react';
import styled from 'styled-components'
import {getImage} from '../shared/getImage'
import {Link, useLocation} from 'react-router-dom'
import {AddToCart} from '../actions/cartAction'
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';
import Quantity from '../shared/quantity';
// import { useEffect } from 'react';
function Product({product}) {
     const {pathname} = useLocation()
     const detailpage = pathname !== "/"
     const dispatch = useDispatch()
     
    //  const cartHandler = () =>{
    //      dispatch(AddToCart(newProd))

    //  }


    return (
        <Pro className={`${detailpage ? "detail-product":""}`}>
               <Link to={`/product/${product.id}`}>
        <img src={getImage(product.image)} alt="banner" />
        <div className="img_detail">
        <h5>{product.name}</h5>
        {!detailpage &&(
            <>
        <p>Price:${product.price}</p>
        
          {/* <Button onClick={cartHandler}>Add To Cart</Button> */}
        </>
        )}
        </div>
        </Link>
    </Pro>  
    );
}

const Pro = styled.div`
    cursor:pointer;
    position: relative;
    margin:1rem;
    height:35rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    transition: all 0.2s;
    &.detail-product{
        box-shadow: 0 0 5px rgba(0,0,0,0.1);
        height:23vh;
        margin:0;
        flex:1 1 15rem;
        img{
            height: 60%;
        }
    }
    img{
        width:100%;
        height:25rem;
        object-fit: cover;
    }
    .img_detail{
        padding:0 1rem;
    }
    h5{
        margin-top:1rem;
        color:#009C31;
    }
    p{
        margin-top:0.5rem;
            color:#005C1D;

        strong{
        }
    }
    &:hover button{
        display:block;
    }
 
`

const Button = styled.button`
    display: none;
    padding:0.5rem 1rem;
    position: absolute;
    bottom: 5px;
    right:5px;
    background: none;
    border:1px solid #00C23D;
    cursor: pointer;
    color:#005C1D;
    transition: all 0.2s;
    &:hover {
        background:#00C23D ;
        color:#fff;
    }
`

export default Product;