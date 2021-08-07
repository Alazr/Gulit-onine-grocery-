import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import banner from '../img/banner.jpg'
import Pagination from '../shared/pagination';
import Product from './product'
import ProductGallery from './ProductGallery';
import Promotion from './Promotion';
import { useEffect } from 'react';
import { sortBy } from '../shared/sortBy'
import { filterUpdated, filteredItemLength } from '../store/ul'

function MainBody(props) {

    const dispatch = useDispatch()

    const category = useSelector(state => state.entities.category)
    const { list: Products,loading } = useSelector(state => state.entities.products)
    const { pageNum, perPage, filter: filtName, searchValue, sortby } = useSelector(state => state.ui)
    const Category = [{ _id: 0, name: "All Products" }, ...category]

    let filt =  Products
    if (filtName) {
        if (filtName == "All Products")
            filt = Products
        else
            filt = Products.filter(p => p.category.name == filtName)

    } else if (searchValue) {
        filt = Products.filter(p => p.name.toLowerCase().startsWith(searchValue.toLowerCase()))
    }


    const sorted = sortBy(filt, sortby.path, sortby.ord)
    const start = (pageNum - 1) * perPage
    const pag = _(sorted).slice(start).take(perPage).value()

    // console.log(!loading && Products)
    const topProducts = sortBy(Products, "price", "desc").slice(0, 3)
    const veg = Products.filter(p => p.category.name == "Vegetable")
    const cheapVeg = sortBy(veg, "price", "asc").slice(0, 3)



    const filterHandler = (name) => {
        dispatch(filterUpdated(name))
    }

    useEffect(() => {
        dispatch(filteredItemLength({ length: filt.length }))
    }, [Products, filtName, searchValue])



    return (
        <BodyContainer id="body">
        {
         (  !loading &&
             <> 
              <Left>
                <div>
                    <h4>Category</h4>
                    <ul>
                        {
                            Category.map(item => (
                                <li key={item._id} className={filtName === item.name ? "active" : ''} onClick={() => filterHandler(item.name)}>{item.name}</li>
                            ))
                        }
                    </ul>
                </div>
                {topProducts && (<Promotion title="Best Deals" data={topProducts} />)}
                <Promotion title="Cheap Vegetables" data={cheapVeg} />
            </Left>
            <Right>
                <ProductGallery pag={pag} />
                <Pagination count={filt.length} />
            </Right>
            </>
            )}
        </BodyContainer>
    );
}

const BodyContainer = styled.div`
    width:100%;
    display:flex;
    margin-top:1rem;
    @media screen and (max-width:530px){
        justify-content: center;
    }
`

const Left = styled.div`
    margin-right: 2rem;
    height:fit-content;
    min-width:25%;
    background:#fcfcfc;
    h4{
        color:#333;
    }
    ul{
        margin:1rem 0;
    }
    li{
        padding: 0.8rem 0 0.5rem 3rem;
        cursor: pointer;
        &:hover{
            background: lightgray;
        }
        &.active{
            background:#05d447;
            color:white
        }
    }
    @media screen and (max-width:768px){
    
    display:none;

}
`
const Right = styled.div`
    min-height:100vh;
    position:relative;
    padding-bottom:10rem;
`



export default MainBody;