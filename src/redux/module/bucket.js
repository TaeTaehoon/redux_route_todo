// bucket.js

// Actions
const CREATE = "bucket/CREATE";

const initialState = {
  list: [
    "블루보틀 커피 마시기",
    "개발자 취직하기",
    "리액트 등반하기",
    "왜안되지",
  ],
};

// Action Creators
export function createBucket(bucket) {
  console.log("액션 생성~");
  return { type: CREATE, bucket };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
      console.log(state.list);
      const newBucketList = [...state.list, action.bucket];

      return { list: newBucketList };
    }
    // do reducer stuff
    default:
      return state;
  }
}
