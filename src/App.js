import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createBucket } from "./redux/module/bucket";
import BucketList from "./BucketList";

function App() {
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
        <BucketList />
        <FormStyled>
          <input ref={inputRef} type="text" />
          <button ref={btnRef}>추가하기!</button>
        </FormStyled>
      </Container>
    </div>
  );
}
const FormStyled = styled.div`
  width: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 500px;
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
`;
export default App;
