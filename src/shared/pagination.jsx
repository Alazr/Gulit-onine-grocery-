import React from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { pageUpdated } from '../store/ul';
import _ from 'lodash'
import { validate } from 'uuid';

function Pagination({ count }) {
    const { pageNum } = useSelector(state => state.ui)

    const pages = Math.ceil(count / 9)
    const numPages = _.range(1, pages + 1)


    const dispatch = useDispatch()


    const clickHandler = (val) => {
        dispatch(pageUpdated(val))
    }
    if (pages === 1) {
        return null
    }

    return (
        <PaginStyle>
            {
                numPages.map(val => <button className={pageNum === val ? "active" : ""} onClick={() => clickHandler(val)} key={val} >{val}</button>)
            }

        </PaginStyle>
    );
}

const PaginStyle = styled.div`
    position:absolute;
    bottom: 2%;
    right:10%;
    display: flex;
    button{
        background:none;
        padding: 0.5rem 1rem;
        border: 1px solid #ccc;
        border-collapse: collapse;
        cursor: pointer;
        &:hover{
            background-color:#05d447;
            color: white;
            /* border:none; */
        }
        &.active{
            background-color:#009C31;
            color: white;
        }
    }
`

export default Pagination;