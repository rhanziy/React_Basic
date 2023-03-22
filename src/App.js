import React from "react";
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Detail from './components/Detail'
import Header from "./components/Header";
import { About, Member, Location } from './components/About'



let ListStyle = styled.div`
  margin:40px 0;
  user-select: none;
  div { padding:20px; border-bottom: 1px solid #808080 }
  h4 { font-size: 17px; font-weight:bold; cursor: pointer; }
  button { font-size: 15px; }
  span { cursor: pointer; }
`

let InputStyle = styled.div`  
  display: flex;
  justify-content: center;
`

let ModalStyle = styled.div`
  margin: 30px 0;
  padding:30px;
  background-color: #E0E0E0;
  h4 { height:50px; }
`



function App() {

  let [title, setTitle] = useState(['온도', '습도', '조명', '날씨'])
  let [index, setIndex] = useState(0);
  let [count, setCount] = useState([1, 2, 3, 4]);
  let [modal, setModal] = useState(false);
  let [input, setInput] = useState('');


  return (

      <Routes>
        <Route path="/detail" element={<Detail/>} />
        <Route path="/about" element={<About/>} >
          <Route path="member" element={<Member />}></Route>
          <Route path="location" element={<Location/>}></Route>
        </Route>
        <Route path="/" element={
          <div className="App">
            <Header />
    
            {/* <button onClick={()=>{
              let copy = [...title];
              copy.sort();
              setTitle(copy);
            }}>정렬</button> */}
            
            <ListStyle>
              {
                title.map((e, i) => {
                  return (
                    <>
                    <div>
                        <h4 onClick={() => { setModal(!modal); setIndex(i); }} key={i}>{e}</h4>
                        <p><span onClick={() => {
                          let copy = [...count];
                          copy[i]++
                          setCount(copy);
                        }}>👍</span>{count[i]}</p>
                        <button onClick={() => {
                          let copy = [...title];
                          copy.splice(i, 1);
                          setTitle(copy);
                        }}>삭제</button>
                    </div>
                    </>
                  )
                })
              }
            </ListStyle>
            <InputStyle>
              <input onChange={(e) => setInput(e.target.value)}></input>
              <button onClick={() => {
                console.log(input);
                if (input === '') {
                  console.log('제목이 비었어요');
                } else {
                  setCount([...count, 0]);
                  setTitle([...title, input])
                }
              }
            }>글발행</button>
            </InputStyle>
            {
              modal && <Modal title={title} index={index} />
            }
          </div>
        } />
      </Routes >

  );
}

function Modal({ title, index }) {
  return (
    <>
      <ModalStyle>
        <h4>{title[index]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </ModalStyle>
    </>

  )
}


export default App;
