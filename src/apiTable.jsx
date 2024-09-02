// src/features/counter/Counter.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserData } from './app/apiSelector';
import { userDataAction } from './app/apiReducer/apiSlice';
import { fetchUserData } from './app/api';

function ApiTable(){

// id and todo map from api data
  const userArray = useSelector(selectUserData)
  console.log(userArray);
  const dispatch = useDispatch()
  
  useEffect(()=>{
      fetchUserData().then((res)=>{
      dispatch(userDataAction(res))
    })

    
  },[dispatch])
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </table>
  )
}

export default ApiTable;
