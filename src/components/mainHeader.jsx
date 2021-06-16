import React,{useState} from 'react';
import styled from 'styled-components';
import SearchInput from '../shared/searchInput';
import SelectInput from '../shared/selectInput';
import {utilSearch,utilSort} from '../actions/utilAction'
import { useDispatch, useSelector } from 'react-redux';


function MainHeader(props) {

    const [data,setData] = useState("")
    const dispatch = useDispatch()
    const {filtLength,perPage,pageNum} = useSelector(state=>state.utils)
    const currentVal = (perPage * pageNum) > filtLength ? filtLength : (perPage * pageNum)

    
    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(utilSearch(data))
    }

    const changeHandler = ({target}) =>{
        dispatch(utilSearch(target.value))
        setData(target.value)
    }

    return (
        <HeaderContainer>
            <form onSubmit={submitHandler}>
                <SearchInput data={data} onChange={changeHandler}/>
            </form>
        <p>showing {currentVal} item out of {filtLength}</p>
        <SelectInput/>
    </HeaderContainer>
    );
}


const HeaderContainer = styled.div`
margin-top: 2rem;
min-height:5rem;
    display: flex;
    align-items: center;
    justify-content:flex-start;
    p{
        margin-left: 5rem;
        flex: 1;
    }
`

export default MainHeader;