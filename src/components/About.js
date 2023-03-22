import React, { useDebugValue } from "react";
import { useState } from 'react';
import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";


let NavStyle = styled.nav`
    display: flex;
    margin-top: 20px;
    li {
        margin: 0 20px;
        list-style: none;
        cursor: pointer;
        font-weight: bold;
    }
`

let Content = styled.div`
    margin-top:30px;
    padding:0 30px;
    h4 { font-size: 16px; }
`


function About() {

    let navigate = useNavigate();

    return (
        <div>  
            <Header/>
            <div>About Page</div>
            <NavStyle>
                <li onClick={()=> navigate('/about/member')}>멤버</li>
                <li onClick={()=> navigate('/about/location')}>위치정보</li>
            </NavStyle>
            <Outlet></Outlet>
        </div>
    )
}

function Member(){
    return(
        <div>
            <Content>
                <h4>멤버구성</h4>
                <p>ㅇㅇ팀</p>
                <img src={process.env.PUBLIC_URL + '/member.jpg'}></img>
            </Content>
        </div>
    )
}

function Location(){
    return(
        <div>
            <Content>
                <h4>위치</h4>
                <p>서울지도</p>
                <img src={process.env.PUBLIC_URL + '/map.png'}></img>
            </Content>
        </div>
    )
}

export { About, Member, Location } ;
