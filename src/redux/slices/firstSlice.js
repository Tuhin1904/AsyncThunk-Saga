// import { createSlice } from '@reduxjs/toolkit';
// import fetchUserName from '../asyncThunkFunc/fetchUserName';

// const initialState = {
//   name: 'tg',
//   age: '23',
//   status: 'coder',
// };
// export const firstSlice = createSlice({
//   name: 'firstSlice',
//   initialState: initialState,
//   reducers: {
//     updateAge: (state, action) => {
//       state.age = action.payload;
//     },
//     updateStatus: (state, action) => {
//       state.status = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserName.fulfilled, (state, action) => {
//         state.name = action.payload;
//       })
//       .addCase(fetchUserName.pending, (state, action) => {
//         state.name = 'Loading';
//       });
//   },
// });

// export const { updateAge, updateStatus } = firstSlice.actions;
// export default firstSlice.reducer;
// Above code for Async Thunk

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'tg',
  age: '23',
  status: 'coder',
};
export const firstSlice = createSlice({
  name: 'firstSlice',
  initialState: initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateAge: (state, action) => {
      state.age = action.payload;
    },
    updateStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});
export const { updateAge, updateName, updateStatus } = firstSlice.actions;
export default firstSlice.reducer;
