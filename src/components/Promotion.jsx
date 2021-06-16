import React from 'react';
import PromoItem from './promoItem';
import styled from 'styled-components'

function Promotion({title,data}) {
    return (
        <PromotionStyle>
            <h4>{title}</h4>
            {
                data.map(i=>(
                    <PromoItem key={i.id} item={i}/>
                ))
            }
        </PromotionStyle>
    );
}

const PromotionStyle = styled.div`
    margin-bottom:3rem;
   
` 


export default Promotion;