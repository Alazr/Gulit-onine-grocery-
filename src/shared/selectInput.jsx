import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import {utilSort} from '../actions/utilAction'
function SelectInput(props) {
    const dispatch = useDispatch()
    const changeHandler = ({target}) =>{
        const value = target.value.split(",")
        dispatch(utilSort(value))
        
    }
    return (
        <SelectContainer>
            <select onChange={changeHandler} name="sort" id="sort">
                <option >Sort By</option>
                <option value="name,asc">Name Asc</option>
                <option value="name,desc">Name Desc</option>
                <option value="price,asc">Price Asc</option>
                <option value="price,desc">Price Des</option>
                <option value="category,asc">category</option>
            </select>
        </SelectContainer>
    );
}

const SelectContainer = styled.div`
    select{
        width:12rem;
        height:3rem;
        padding:0.5rem;
        outline:none;
        font-size: 1.4rem;
        border:1px solid #005C1D;
        background: #fcfcfc;
        
    }
    option{
        padding:1rem;
        margin:1rem;
        font-size:1.4rem;
    }
`


export default SelectInput;