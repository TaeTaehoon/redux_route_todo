import React, { useEffect, useReducer, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { deleteBucket } from "./redux/module/bucket";

const BucketList = (props) => {
  const data = useSelector((state) => state.bucket.list);
  return (
    <WrapStyled>
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
    </WrapStyled>
  );
};

const WrapStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  gap: 20px;
  width: 500px;
  height: 500px;
  overflow: auto;
`;
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
    height: 80px;
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

const DetailPage = () => {
  const data = useSelector((state) => state.bucket.list);
  const { index } = useParams();
  const deleteRef = useRef();
  const dispatch = useDispatch();
  const removeBucket = () => {
    dispatch(deleteBucket(index));
  };
  useEffect(() => {
    deleteRef.current.addEventListener("click", removeBucket);
    return () => {
      if (deleteRef.current !== null)
        deleteRef.current.removeEventListener("click", removeBucket);
    };
  }, []);
  return (
    <div>
      {data[index]}
      <button>
        <Link to="/">뒤로가기</Link>
      </button>

      <button ref={deleteRef}>
        <Link to="/"> 삭제하기!</Link>
      </button>
    </div>
  );
};

export default BucketList;
