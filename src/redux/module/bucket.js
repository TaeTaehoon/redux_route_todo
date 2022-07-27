// bucket.js

// Actions
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";

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
  return { type: CREATE, bucket };
}

export function deleteBucket(bucket) {
  return { type: DELETE, bucket };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
      const newBucketList = [...state.list, action.bucket];

      return { list: newBucketList };
    }

    case "bucket/DELETE": {
      const newBucketList = [...state.list].filter(
        (bucket, idx) => idx !== parseInt(action.bucket)
      );
      return { list: newBucketList };
    }
    // do reducer stuff
    default:
      return state;
  }
}
