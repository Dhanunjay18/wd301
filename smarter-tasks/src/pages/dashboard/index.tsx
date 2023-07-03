import React from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const handleSignout =async (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      localStorage.removeItem('userData');
      localStorage.removeItem('authToken');
    } catch (error) {
      console.log(error);
    }
    navigate('/signin');
  }
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');  
  return (
    <div className="min-h-screen  items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Email : {userData.email} </h2>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Name : {userData.name}</h2>
        <button id="logout-link" onClick={handleSignout} className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Sign Out</button>
      </div>
    </div>
  );
}

export default Dashboard;