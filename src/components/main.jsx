import React from 'react';
import MainHeader from './mainHeader';
import MainBody from './mainBody';
import styled from 'styled-components'


function Main(props) {
    return (
        <MainContainer>
            <MainHeader/>
            <MainBody/>
            
        </MainContainer>
    );
}

const MainContainer = styled.div`
    width:90%;
    max-width:1140px;
    margin:auto;
`


export default Main;