import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { loadDetail } from '../actions/productActions';
import {AddToCart} from '../actions/cartAction'
import {getImage} from '../shared/getImage'
import Nav from './nav'
import Product from './product'
import Quantity from '../shared/quantity';

function ProductDetail(props) {

    const dispatch = useDispatch()
    const [itemInCart,setItemInCart] = useState({})

    const {id} = useParams()
    const {detail:item,Products,detailIsLoading,cart} = useSelector(state=>state.products)
    const samePro = !detailIsLoading && Products.filter(p=>p.id != id && p.category.name == item.category.name).slice(0,4)
    
    useEffect(()=>{
        dispatch(loadDetail(id))
    },[id])
    // useEffect(()=>{
    //     setItemInCart(cart.filter(i=>i.id == item.id)[0])
    //     console.log("this run when component mount")
    // },[])


    useEffect(()=>{
        setItemInCart(cart.filter(i=>i.id == item.id)[0])
    },[cart,item])
   
     
    const cartHandler = () =>{
        dispatch(AddToCart(item))
    }
    return (
        <>
       {!detailIsLoading &&
           (
            <>
        <Nav className="active"/>
        <Detail>
            <div className="img-div">
                <img src={getImage(item.image)} alt="dis" />
            </div>
            <div className="detail-desc">
               <ProdInfo>
               <h2>{item.name}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quae sed, ipsam tempore libero totaiste maxime accusantium alias 
                    quod iusto illum animi! Commodi aperiam reiciendis blanditiis unde animi expedita ratione vero quaerat adipisci iste laborum illum inventore, 
                    nostrum ipsam sapiente distinctio totam accusamus architecto dolore eveniet cumque rerum. Tenetur?</p>
                <p><strong>Price:</strong>${item.price}</p>
               </ProdInfo>
               <CartBtn>
                   {
                       itemInCart ? <Quantity item={itemInCart}/> :
                       <button className="add-cart solid" onClick={cartHandler}>Add to Cart</button>
                   }
                   <button className="add-cart tran">Add to Wishlist</button>
               </CartBtn>
        
               <Related>
                   {
                       samePro.map(pro=>(
                            <Product key={pro.id} product={pro}/>
                       ))
                   }
               </Related>
            </div>
        </Detail>
        </>)}</>
    );
}

const Detail = styled.div`
    width:90%;
    margin:auto;
    min-height:90vh;
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .img-div{
        align-self: center;
        flex:1 1 30rem;
        img{
            height:70vh;
            width:100%;
            object-fit: cover;
        }
    }
    .detail-desc{
        flex:1 1 40rem;
        padding:0 2rem;
        /* padding-bottom: 0; */
    }
`
const ProdInfo = styled.div`
    margin:2rem;
    h2{
        margin-bottom: 1.5rem;
        color:#A3000A;
    }
    p{
        margin:1rem;
        color:#555;
    }
    
`

const CartBtn = styled.div`
    margin:3rem;
    display: flex;
    
    .add-cart{
        padding:0.5rem 1.5rem;
        border:1px solid transparent;
        background: none;
        border-radius: 5px;
        margin:0 1rem;
        cursor:pointer;
        transition:all 0.3s ease;
        &.solid{
            background: #00C23D;
            color:white;
            &:hover{
                background: none;
                color:#333;
                border-color:#00C23D;
                
            }
        }
        &.tran{
            border-color:#00C23D;
            &:hover{
                background: #00C23D;
            color:white;
            }
        }
    }
`
const Related = styled.div`
    margin-left:3rem;
    display:flex;
    text-align: center;
`
export default ProductDetail;