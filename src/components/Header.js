import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


let NavStyle = styled.nav`
  ul {
    display: flex;
    align-content: center;
    height:50px;
  }
  li { 
    margin: auto 20px;
    list-style: none;
    cursor: pointer;
  }
  li:first-child{
    margin-left: 0;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color:black;
  }
`

function Header() {

    let navigate = useNavigate();

    return (
        <div>
            <NavStyle>
            <ul>
                <li onClick={()=> navigate('/')}>개발TEST</li>
                <li onClick={()=> navigate('/detail')}>detail</li>
                <li onClick={()=> navigate('/about')}>about</li>
            </ul>
            </NavStyle>
        </div>
    )
}



export default Header ;





