import React, { useReducer, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Routes, Route, Link, useParams } from "react-router-dom";

const BucketList = (props) => {
  const data = useSelector((state) => state.bucket.list);
  return (
    <Routes>
      <Route
        path="/"
        element={data.map((bucket) => {
          return (
            <BucketStyled key={data.indexOf(bucket)}>
              <Link to={`/detail/${data.indexOf(bucket)}`}>{bucket} </Link>
            </BucketStyled>
          );
        })}
      />
      <Route path="/detail/:index" element={<DetailPage />} />
    </Routes>
  );
};

const DetailPage = () => {
  const data = useSelector((state) => state.bucket.list);
  const { index } = useParams();
  const deleteRef = useRef();
  return (
    <div>
      {data[index]}
      <button>
        <Link to="/">뒤로가기</Link>
      </button>

      <button ref={deleteRef}>삭제하기!</button>
    </div>
  );
};
const BucketStyled = styled.div`
  width: 450px;
  height: 80px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  a {
    width: 99%;
    height: 99%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 1.4rem;
    letter-spacing: 0.13rem;
    transition: all 0.2s;
    :hover {
      font-size: 1.6rem;
      color: blue;
    }
  }
`;
export default BucketList;
