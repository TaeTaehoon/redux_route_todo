import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import { createBucket } from "./redux/module/bucket";
import BucketList from "./BucketList";

function App() {
  const [list, setList] = useState([
    "블루보틀 커피 마시기",
    "개발자 취직하기",
    "리액트 등반하기",
  ]);
  const btnRef = useRef();
  const inputRef = useRef();
  const dispatch = useDispatch();
  const uploadBucket = () => {
    dispatch(createBucket(inputRef.current.value));
    inputRef.current.value = "";
  };
  useEffect(() => {
    btnRef.current.addEventListener("click", uploadBucket);
    return;
    //
  }, []);

  return (
    <div className="App">
      <Container>
        <BucketList buckets={list} />
      </Container>
      <FormStyled>
        <input ref={inputRef} type="text" />
        <button ref={btnRef}>추가하기!</button>
      </FormStyled>
    </div>
  );
}
const FormStyled = styled.div`
  width: 308px;
  position: relative;
  right: -1130px;
  bottom: 630px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  input {
    width: 300px;
    height: 60px;
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
  }

  button {
    width: 150px;
    height: 50px;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
  }
`;
const Container = styled.div`
  width: 500px;
  height: 80vh;
  background-color: #eee;
  margin: 50px auto 0 auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  gap: 20px;
`;
export default App;
