import React, { useState } from 'react';
import styled from 'styled-components';


function SearchInput({data,onChange}) {
    return (
          <InputGroup>
            <input
              value={data}
              onChange={onChange}
              type="text"
              name="search"
              placeholder="Search here"
              className="search-input"
            />
            <Button className="button search-btn" type="submit">
                Search
                </Button>
          </InputGroup>

   
    );
}

const InputGroup = styled.div`
      width: 40rem;
  display: flex;
  background: #fff;
  box-shadow: 0 3px 5px rgba(0,0,0,0.1);
  .search-input{
  /* border: 1px solid #005C1D; */
  font-size: 1.4rem;
  padding: 0.8rem 1.6rem;
  font-weight:400;
  width: 100%;
  border: none;
  outline: 0;
  color: black;
  background: transparent;

  &::placeholder {
  color: #666;
  font-weight:400;
  @media screen and (max-width:780px){
    padding: 0.5rem 1.6rem;
  }
}

  .button {

}
  }
@media screen and (max-width:900px){
      width:30rem;
  }
@media screen and (max-width:512px){
      width:25rem;
  }
@media screen and (max-width:400px){
      width:16rem;
  }
`

const Button = styled.button`
box-shadow: 0 3px 5px rgba(0,0,0,0.1);
      padding: 0.5rem 1rem;
  background: #00C23D;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.4rem;

  img{
      width:90%;
  }
`

export default SearchInput;