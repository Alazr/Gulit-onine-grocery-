import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Banner from './banner';
import Main from './main'
import queryString from "query-string"
import { useLocation } from 'react-router-dom';
import { filterUpdated } from '../store/ul';
import Nav from './nav';
import { loadProducts } from '../store/product';
import {loadCategory} from '../store/category'
import Loader from './loader';
import {userAdded,tokenAdded,userRemoved} from '../store/auth'
import auth from '../services/auth'


function Home(props) {
    const dispatch = useDispatch()
    const { category } = queryString.parse(useLocation().search)
   

    useEffect(() => {
        dispatch(loadCategory())
        dispatch(loadProducts())
        const jwt = localStorage.getItem("token")
        if(jwt){
            const user = auth.currentUser(jwt)
            dispatch(userAdded({"user":user}))
        }

    }, [])




    useEffect(()=>{
        if (category) {
            dispatch(filterUpdated(category))
        }
    },[category])

    const {loading } = useSelector(state => state.entities.products)

    return (
        <div>
      {loading ? <Loader/> :(      <>
            {
                category ? <Nav /> : <Banner />
            }
            
            <Main />
            </>)}
        </div>
    );
}

export default Home;