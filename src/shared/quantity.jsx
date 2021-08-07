import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { itemQuantityDec, itemQuantityInc } from '../store/cart'
function Quantity({ item }) {

    const dispatch = useDispatch()


    const quantityHandler = (val) => {
        if (val === "I") {
            dispatch(itemQuantityInc(item._id))
        } else {
            dispatch(itemQuantityDec(item._id))
        }
        // dispatch(changeQuan(newCart))
    }

    return (
        <Qua>
            <button disabled={item.qua <= 1} onClick={() => quantityHandler("D")}>-</button>
            <span>{item.qua}</span>
            <button onClick={() => quantityHandler("I")}>+</button>
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
        background:#00C23D;
        color:#fff;
        border-radius: 5px;
        &:hover{
        background:#02d846;

        }
        &:disabled{
            background: #70fc9c;
        }
        
    }
`


export default Quantity;