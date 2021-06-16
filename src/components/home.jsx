import React,{useEffect} from 'react';
import { useDispatch } from "react-redux";
import {LoadProducts} from '../actions/productActions';
import Banner from './banner';
import Main from './main'
import queryString from "query-string"
import { useLocation } from 'react-router-dom';
import {utilFiltName} from '../actions/utilAction'
import Nav from './nav';

function Home(props) {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(LoadProducts())
    },[])

    const {category} = queryString.parse(useLocation().search)
    if(category){
        dispatch(utilFiltName(category))
    }
    return (
        <div>
            {
                category ? <Nav/> : <Banner/>
            }
           
            <Main/>
        </div>
    );
}

export default Home;