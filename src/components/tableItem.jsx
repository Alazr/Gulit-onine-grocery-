import React from 'react';
import banner from '../img/banner.jpg'
import styled from 'styled-components'
import {getImage} from '../shared/getImage'
import {Link} from 'react-router-dom'
import { bindActionCreators } from 'redux';
function TableItem({item}) {
    return (
            <Link to={`/product/${item.id}`}> 
        <TableItemStyle>
        <img src={getImage(item.image)} alt="banana" />
        <div className="promo_detail">
            <h6>{item.name}</h6>
        </div>
    </TableItemStyle>
    </Link>
    );
}

const TableItemStyle = styled.div`
cursor:pointer;
width:50%;
    height:100%;    
    display:flex;
    align-items: center;
    .promo_detail{
        flex:1;
        line-height:1.2;
        h6{
            color:#009C31;
        }
    }
    img{
        margin-right:1rem;
        height: 40px;
        width:40px;
        object-fit: cover;
    }
    &:hover{
        background: #f1f1f1;
    }
`

export default TableItem;