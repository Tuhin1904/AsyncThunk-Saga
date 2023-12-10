import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUserName = createAsyncThunk('fetchFromDummy', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const res2 = await res.json();

  return res2[2].name;
});

export default fetchUserName;
