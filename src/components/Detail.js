import React, { useContext } from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import { Nav } from "react-bootstrap";
import { Context1 } from '../App';

import Header from "./Header";


let fadeIn = keyframes`
    from {
        opacity: 0;
    } to {
        opacity:1;
    }
`


let FadeBox = styled.div`
    margin:30px;
    width:200px;
    height:200px;
    background-color: #6666FF;
    animation: ${fadeIn} .5s ease-in;
`


let ContentBox = styled.div`
    width:90%;
    margin:0 auto;
    padding:20px;
    opacity:0;

    &.in {
        opacity:1;
        transition: 0.2s ease-in;
    }
`

let NavStyle = styled(Nav)`
    width:90%;
    margin: 50px auto 0;
`

function Detail() {

    let [ box, setBox ] = useState(true);  
    let [ tab, setTab ] = useState(0);
    let [ fade, setFade ] = useState('');
    let { user } = useContext(Context1);


    useEffect(()=>{

        let timer = setTimeout(()=> { 
            setBox(false); 
        }, 2000);
 
        return() => {
            clearTimeout(timer);
        }

    }, [])

    
    useEffect(()=>{
        let timer = setTimeout(()=>{
            setFade('in');
        },100)
        return()=>{
            setFade('');
            clearTimeout(timer);
        }
    }, [tab])



    return (
        <div>  
            <Header />
            <div>Detail Page</div>
            <p>{ user }</p>
            {
                box ? <FadeBox>2초 뒤 사라짐</FadeBox> : null
            }
            <NavStyle variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                <Nav.Link 
                    eventKey="link0"
                    onClick={()=> {setTab(0);}}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link 
                    eventKey="link1"
                    onClick={()=> {setTab(1);}}>버튼2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link  
                    eventKey="link2"
                    onClick={()=> {setTab(2);}}>버튼3</Nav.Link>
                </Nav.Item>
            </NavStyle>
            <TabContent tab={ tab } fade={ fade } />
        </div>
    )
}


function TabContent({ tab, fade }){

    
    return(
        <ContentBox className={fade}>
            {[ 
                <div>1번째 탭내용</div>, 
                <div>2번째 탭내용</div>, 
                <div>3번째 탭내용</div> 
            ][tab]}
        </ContentBox>
    )
}

export default Detail ;
