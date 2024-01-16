'use client'
import React, { useEffect,useState } from 'react'
import axiosInterceptorInstance from '@/axios/axiosInterceptorInstance';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '@/redux/slices/counterSlice';

async function registerUser(e) {
    e.preventDefault();
    const payload = {
        "name":"Chandra Merchant",
        "email":"chandra+m3@razorpod.in",
        "mobile":"9818268558",
        "password":"hello@1234",
        "confirmPassword":"hello@1234"
    }
    const registerRes = await axiosInterceptorInstance.post('/api/merchant', payload);
    console.log('Register successful', registerRes);
}


const Register = () => {
    const counter = useSelector((state) => state.counter);
    const [countNum, setCountNUm] = useState(0);
    const dispatch = useDispatch();
    function incrementCounter(e) {
        e.preventDefault();
        dispatch(increment())
    }
    useEffect(() => {
        setCountNUm(counter);
    },[counter])
  return (
      <div>
          <h3>User Registration</h3>
          <p>Counter:{ countNum}</p>
          <button onClick={registerUser}>Register</button>
          <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  )
}

export default Register