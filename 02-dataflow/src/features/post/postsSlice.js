import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "Machine Learining",
        content: "asdkfjg alkh asdf hlhdlhasd",
      },
  { id: "2", title: "Web Development", content: "mjh,nkbuygnkubg " },
];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state,action){
      state.push(action.payload)
    }
  },
});

export const selectAllPosts = (state) => state.posts;
export const {postAdded}=postsSlice.actions
export default postsSlice.reducer;