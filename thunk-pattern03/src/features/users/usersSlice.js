import {createSlice} from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "sameer sunar" },
  { id: "1", name: "second user" },
  { id: "2", name: "third user" },
];

const userslice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users

export default userslice.reducer;
