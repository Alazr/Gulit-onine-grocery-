import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { itemRemoved, itemCleared } from '../store/cart'


function DelBtn({ id }) {
    const dispatch = useDispatch()

    const deleteHandler = () => {
        if (id)
            dispatch(itemRemoved({ id }))
        else {
            dispatch(itemCleared())
        }
    }
    return (
        <DelButton onClick={deleteHandler}>{id ? "Delete" : "DeleteAll"}</DelButton>
    );
}

const DelButton = styled.button`
    padding:0.6rem;
    background: #ff0000;
    border:none;
    border-radius: 5px;
    color:white;
    cursor:pointer;
    
`

export default DelBtn;