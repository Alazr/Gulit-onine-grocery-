import React,{useState,useEffect} from 'react';
import Nav from './nav'
import styled from 'styled-components'
import TableItem from './tableItem';
import Quantity from '../shared/quantity';
import DelBtn from './delBtn';
import { useSelector } from 'react-redux';

function Cart(props) {


    const {cart} = useSelector(state=>state.products)
    
    const [total,setTotal] = useState(0)
    useEffect(()=>{
        let val = 0
        cart.forEach(item=>{
            val = val + (item.qua * item.price)
        })
        setTotal(val)
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])
    

    return (
        <CartContainer>
            <Nav/>
            {
                JSON.parse(localStorage.getItem("cart")).length === 0 ? <h4>There is no item in the cart</h4>:
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
                       cart && cart.map(item=>(
                        <tr key={item.id}>
                        <td><TableItem item={item}/></td>
                        <td><Quantity item={item}/></td>
                        <td>{item.qua*item.price}</td>
                        <td><DelBtn id={item.id}/></td>
                    </tr>
                       ))
                   }
                  
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="2">Total</th>
                        <th>{total}</th>
                        <th><DelBtn/></th>
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
  
`
export default Cart;