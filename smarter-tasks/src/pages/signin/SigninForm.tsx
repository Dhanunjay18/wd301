import React, { useState } from 'react';
import { API_ENDPOINT } from '../../config/constants';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email : string;
  password: string;
}

const SigninForm = () => {
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  const { register, handleSubmit, formState: {errors}} = useForm<Inputs>();

  const onSubmit : SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data
    console.log(email, "   " ,  password)
    try {
      const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error('Sign-in failed');
      }
      console.log(response)
      const data = await response.json();
      console.log(data)
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userData', JSON.stringify(data.user));     
      navigate('/account');
    } catch (error) {
      console.error('Sign-in failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error &&
        <span>{error}</span>
      }
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
        <input 
          type="email"           
          id="email" 
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          autoFocus {
            ...register('email', {required: true})
          } />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Password:</label>
        <input 
          type="password" 
          id="password"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          autoFocus {
            ...register('password', {required: true})
          } />
      </div>
      <button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Sign In</button>
    </form>
  );
};

export default SigninForm;