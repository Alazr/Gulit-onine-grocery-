import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import styled from 'styled-components'
import {changeQuan} from '../actions/cartAction'
import TableItem from '../components/tableItem';
function Quantity({item}) {
    

    const dispatch = useDispatch()
    const {cart} = useSelector(state=>state.products)

    const quantityHandler = (val) =>{
        const newCart = [...cart]
        const idx = newCart.indexOf(item)
        newCart[idx] = {...item}
        if(val === "I"){
            newCart[idx].qua++
        }else{
            newCart[idx].qua--
        }
        dispatch(changeQuan(newCart))
    }

    return (
        <Qua>
            <button disabled={item.qua <= 1} onClick={()=>quantityHandler("D")}>-</button>
            <span>{item.qua}</span>
            <button onClick={()=>quantityHandler("I")}>+</button>
        </Qua>
    );
}

const Qua = styled.div`
    display:flex;
    min-width:10rem;
    justify-content: center;
    span{
        padding:0 1rem;
        font-size:1.8rem;
        
    }
    button{
        border:none;
        padding:0.5rem 1rem;
        cursor: pointer;
        background:#ddd;
        border-radius: 5px;
        &:hover{
        background:lightgray;

        }
    }
`


export default Quantity;