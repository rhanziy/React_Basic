import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";

import Header from "./Header";

let FadeBox = styled.div`
    margin:30px;
    width:200px;
    height:200px;
    background-color: #6666FF;
`

let ContentBox = styled.div`
    padding:20px;
    div { 
        transition: 0.2s ease-in;
    }
`


let NavStyle = styled(Nav)`
    margin-top:50px;
`

function Detail() {

    let [ box, setBox ] = useState(true);  
    let [ tab, setTab ] = useState(0);
    let [ fade, setFade ] = useState(false);

    useEffect(()=>{

        let timer = setTimeout(()=> { 
            setBox(false); 
        }, 1000);

        return() => {
            clearTimeout(timer);
        }

    }, [])
    
    
    return (
        <div>  
            <Header />
            <div>Detail Page</div>
            {
                box ? <FadeBox>1초 뒤 사라짐</FadeBox> : null
            }
            <NavStyle variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                <Nav.Link 
                    onClick={()=> {setTab(0);}}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link 
                    onClick={()=> {setTab(1);}}>버튼2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link  
                    onClick={()=> {setTab(2);}}>버튼3</Nav.Link>
                </Nav.Item>
            </NavStyle>
            <TabContent tab={ tab } />
        </div>
    )
}


function TabContent({ tab }){

    
    return(
        <ContentBox>
            {[ 
                <div>1번째 탭내용</div>, 
                <div>2번째 탭내용</div>, 
                <div>3번째 탭내용</div> 
            ][tab]}
        </ContentBox>
    )
}

export default Detail ;
