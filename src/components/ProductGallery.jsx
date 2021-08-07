import React from 'react';
import Product from './product';
import styled from 'styled-components';
import { useSelector } from 'react-redux'

function ProductGallery({ pag }) {

    return (
        <Gallery >
            {
                pag.map(pro => (
                    <Product key={pro._id} product={pro} />
                ))
            }
        </Gallery>
    );
}

const Gallery = styled.div`
       display:grid;
    grid-template-columns: repeat(3,270px);
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    .pro{
        min-width:270px;
    }
    @media screen and (max-width:1140px){
    
    grid-template-columns: repeat(2,1fr);

}
    @media screen and (max-width:530px){
    
    grid-template-columns: repeat(1,1fr);
    align-content: center;

}



`


export default ProductGallery;