import {createGlobalStyle} from 'styled-components'


const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box
    }
    html{
        font-size: 62.5%;
        @media screen and (max-width:768px){
    
            font-size: 58%;
        
    }
        @media screen and (max-width:400px){
    
            font-size: 55%;
        
    }
    }
    body{
        line-height: 1.5;
        letter-spacing: 1px;
        font-family: 'Open Sans', sans-serif;
        @media screen and (max-width:768px){
    
            overflow-x:hidden;

}
    }
    #logo{
        font-family: 'Lobster', cursive;
        color: #00ED3F;
        cursor:pointer
    }

    ul{
        list-style-type: none;
    }
    a{
        text-decoration:none;
    }
    h1{
        font-size:4.883rem;
    }
    h2{
        font-size: 3.9rem;
    }
    h3{
        font-size: 3.1rem;
    }
    h4{
        font-size: 2.5rem;
    }
    h5{
        font-size: 2rem;
    }
    h6{
        font-size: 1.8rem;
    }
    p,a,button,label,li{
        font-size:1.6rem;
        color:#333;
    }
    /* li,button{
        transition: all 0.3s ease;
    } */

    @media screen and (max-width:768px){
        html{
            font-size: 58%;
        }
    }
`

export default GlobalStyles;