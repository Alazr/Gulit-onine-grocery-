import React, { useState, useEffect } from 'react';
import Nav from './nav'
import styled from 'styled-components'
import TableItem from './tableItem';
import Quantity from '../shared/quantity';
import DelBtn from './delBtn';
import { useSelector } from 'react-redux';
import {Link}from 'react-router-dom'


function Cart(props) {

    const cart = useSelector(state => state.entities.cart)
    const keys = Object.keys(cart)

    
    const [total, setTotal] = useState(0)
    useEffect(() => {
        let val = 0
        keys.forEach(key => {
            val = val + (cart[key].qua * cart[key].price)
        })
        setTotal(val)
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])


    return (
        <CartContainer>
            <Nav />
            {
                keys.length === 0 ?
                    <h4>There is no item in the cart</h4> :
                    (
                        <Table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart &&
                                    keys.map(key => (

                                        <tr key={key}>
                                            <td><TableItem item={cart[key]} /></td>
                                            <td><Quantity item={cart[key]} /></td>
                                            <td>{cart[key].qua * cart[key].price}</td>
                                            <td><DelBtn id={cart[key]._id} /></td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan="2">Total</th>
                                    <th>{total}</th>
                                    <th><DelBtn /></th>
                                </tr>
                                <tr >
                                    <th colSpan="3">

                            <Link to='/register'><button className="add-cart solid">Checkout</button></Link>
                                    </th>

                                </tr>

                            </tfoot>
                        </Table>
                    )
            }
        </CartContainer>
    );
}

const CartContainer = styled.div`
    h4{
        text-align: center;
        margin-top:5rem;

    }
    .add-cart{
        padding:0.5rem 1.5rem;
        border:1px solid transparent;
        background: none;
        border-radius: 5px;
        
        cursor:pointer;
        transition:all 0.3s ease;
        &.solid{
            background: #00C23D;
            color:white;
            &:hover{
                background: none;
                color:#333;
                border-color:#00C23D;
                
            }
        }
        }
`


const Table = styled.table`
    width: 60%;
    margin:auto;
    margin-top: 5rem;
    border-collapse: collapse;
    th,td{
        font-size: 1.8rem;
        text-align: center;
            padding:1rem 0;
        /* padding:1rem 8rem; */
    }
    td:first-of-type{
        text-align: left;
        
    }
    tbody{
        /* pad-top: 1rem; */
    }
    thead th{
        padding-bottom: 1rem;
        border-bottom: 1px solid #A3000A;
        
    }
  
    tfoot {
        color:#A3000A;
    }
    tfoot th:first-of-type{
        text-align:left;

    }
    @media screen and (max-width:524px){
        width:90%
    }
  
`
export default Cart;