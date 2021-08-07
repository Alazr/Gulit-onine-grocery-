import React, { useEffect } from 'react';
import styled from 'styled-components'
import { getImage } from '../shared/getImage'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Quantity from '../shared/quantity';
import { itemAdded } from '../store/cart'
// import { useEffect } from 'react';
function Product({ product }) {
    const { pathname } = useLocation()
    const detailpage = pathname !== "/"
    const dispatch = useDispatch()
    const cart = useSelector(state => state.entities.cart)

    const cartHandler = () => {
        dispatch(itemAdded({ id: product._id, item: product }))

    }


    return (
        <Pro className={`${detailpage ? "detail-product" : "pro"}`}>
            <Link to={`/product/${product._id}`}>
                <img src={getImage(product.image)} alt="banner" />
            </Link>
            <div className="img_detail">
                <h5>{product.name}</h5>
                {!detailpage && (
                    <>
                        <p>Price:${product.price}</p>
                        <CartContainer>
                            {
                                cart[product._id] ? <Quantity item={cart[product._id]} /> :
                                    <Button onClick={cartHandler}>Add To Cart</Button>
                            }
                        </CartContainer>
                    </>
                )}
            </div>
        </Pro>
    );
}

const Pro = styled.div`
    cursor:pointer;
    position: relative;
    margin:1rem;
    height:30rem;
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
        h5{
            font-size: 1.8rem;
        }
    }
    img{
        width:100%;
        height:20rem;
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
const CartContainer = styled.div`
        position: absolute;
    bottom: 5px;
    right:5px;
`


const Button = styled.button`
    display: none;
    padding:0.5rem 1rem;
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