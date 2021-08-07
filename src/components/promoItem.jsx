import React from 'react';
import banner from '../img/banner.jpg'
import styled from 'styled-components'
import {getImage} from '../shared/getImage'
import {Link} from 'react-router-dom'
function PromoItem({item}) {
    return (
        <Link to={`/product/${item._id}`}>
        <PromoItemStyle>
        <div className="promo_detail">
            <h6>{item.name}</h6>
            <p><span>${item.price + 8}</span> ${item.price}</p>
        </div>
        <img src={getImage(item.image)} alt="banana" />
    </PromoItemStyle>
        </Link>
    );
}

const PromoItemStyle = styled.div`
    margin:1rem 0;
    padding: 0.5rem 1rem;
    height:4rem;
    display:flex;
    align-items: center;
    .promo_detail{
        flex:1;
        line-height:1.2;
        h6{
            color:#009C31;
        }
        p{
            margin:0.2rem 0;
            font-size:1.4rem;
        }
        span{
            text-decoration: line-through;
        }
    }
    img{
        padding:0.2rem;
        height: 100%;
        width:40px;
    }
    &:hover{
        background: #f1f1f1;
    }
`

export default PromoItem;