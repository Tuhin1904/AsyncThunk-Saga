// import React from 'react';

// import { useSelector, useDispatch } from 'react-redux';
// import { updateAge, updateStatus } from '../redux/slices/firstSlice';
// import fetchUserName from '../redux/asyncThunkFunc/fetchUserName';

// function Profile() {
//   const { name, age, status } = useSelector((state) => {
//     console.log(state);
//     return state;
//   });
//   const dispatch = useDispatch();
//   const updateAgeFunc = (age) => {
//     dispatch(updateAge(age));
//     console.log('Updating age');
//   };
//   const updateNameFunc = () => {
//     dispatch(fetchUserName());
//     console.log('Updating Name');
//   };
//   const updateStatusFunc = (status) => {
//     dispatch(updateStatus(status));
//     console.log('Updating status');
//   };

//   return (
//     <div>
//       <h2>Name: {name}</h2>
//       <h2>Age ={age}</h2>
//       <h2>Status:{status}</h2>
//       <button onClick={() => updateNameFunc()}>Update Name</button>
//       <button onClick={() => updateAgeFunc(24)}>Update Age</button>
//       <button onClick={() => updateStatusFunc('UNPAID INTERN')}>Update Status</button>
//     </div>
//   );
// }

// export default Profile;
// Async Thunk

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAge, updateName, updateStatus } from '../redux/slices/firstSlice';

function Profile() {
  const { name, age, status } = useSelector((state) => {
    console.log('state is  ', state);
    return state;
  });
  const dispatch = useDispatch();
  const updateAgeFunc = () => {
    dispatch(updateAge(10));
    console.log('Updating age');
  };
  const updateNameFunc = () => {
    dispatch(updateName());
    console.log('Dispatching action to update name');
  };
  const updateStatusFunc = (status) => {
    dispatch(updateStatus('Sadhu'));
    console.log('Updating status');
  };

  return (
    <div>
      <h2>My Name is {name}</h2>
      <h2>My Age is {age}</h2>
      <h2>My Status is {status}</h2>
      <button onClick={() => updateNameFunc()}>Update Name</button>
      <button onClick={() => updateAgeFunc()}>Update Age</button>
      <button onClick={() => updateStatusFunc()}>Update Status</button>
    </div>
  );
}

export default Profile;
