import React from 'react';
import styled from 'styled-components';
import Nav from './nav'
import banner from '../img/banner.jpg'
import { BOOLEAN_NUMBER_BINARY_OPERATORS } from '@babel/types';

function Banner(props) {
    const prop= {
        "background": `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.2),transparent 70%),url(${banner})`,
        "backgroundRepeat" : "no-repeat", 
        "backgroundSize":"cover"       
    }
    return (
        <BannerContainer style={prop}>
            <Nav/>
            <BannerMainText>
                <h1><span>Gulit</span> Online Grocery <br/>Store</h1>
                <h2>Fresh Veg. and Fruits Every Day</h2>
            </BannerMainText>
        </BannerContainer>
    );
}

const BannerContainer = styled.div`
    min-height:100vh;
    background-repeat: no-repeat;
    a{
        color: white;
        text-shadow: 3px 3px 5px rgba(0,0,0,0.1);
    }
`
const BannerMainText = styled.div`

    min-height:85vh;
    display: flex;
    padding-bottom: 3rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align:center;
    font-weight: bold;
        color: #fff;
        text-shadow: 3px 3px 5px rgba(0,0,0,0.2);

    h1{
        font-size: 5.6rem;
        line-height: 1.2;
        margin-bottom:2rem;
        span{
            color: #00ED3F;
        }
    }
    h2{
        margin-top: 1rem;
    }
`
export default Banner;