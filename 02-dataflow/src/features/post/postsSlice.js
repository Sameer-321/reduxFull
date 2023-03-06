import { createSlice,nanoid } from "@reduxjs/toolkit";

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
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content,userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
