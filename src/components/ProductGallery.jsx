import React from 'react';
import Product from './product';
import styled from 'styled-components';
import {useSelector} from 'react-redux'

function ProductGallery({pag}) {
    
    return (
        <Gallery className={pag.length == 1 ? "oneItem" : ""}>
            {
                pag.map(pro=>(
                    <Product key={pro.id} product={pro}/>    
                ))
            }
        </Gallery>
    );
}

const Gallery = styled.div`

    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 1rem;

    &.oneItem{
        grid-template-columns: 350px;
    }

`


export default ProductGallery;