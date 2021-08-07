import React, { useState } from 'react';
import styled from 'styled-components';
import SearchInput from '../shared/searchInput';
import SelectInput from '../shared/selectInput';
import { useDispatch, useSelector } from 'react-redux';
import { searchUpdated } from '../store/ul'


function MainHeader(props) {

    const [data, setData] = useState("")
    const dispatch = useDispatch()
    const { filtLength, perPage, pageNum } = useSelector(state => state.ui)
    const currentVal = (perPage * pageNum) > filtLength ? filtLength : (perPage * pageNum)


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(searchUpdated(data))
    }

    const changeHandler = ({ target }) => {
        dispatch(searchUpdated(target.value))
        setData(target.value)
    }

    return (
        <HeaderContainer>
            <form onSubmit={submitHandler}>
                <SearchInput data={data} onChange={changeHandler} />
            </form>
            <p>showing {currentVal} item out of {filtLength}</p>
            <SelectInput />
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
    @media screen and (max-width:768px){
    justify-content: space-between;
    p{
    display:none;
    }

}
`

export default MainHeader;