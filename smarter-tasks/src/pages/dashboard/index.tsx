import React from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard: React.FC = () => {
const userData = JSON.parse(localStorage.getItem('userData') || '{}');  
const navigate = useNavigate();
const handleSignout =async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.removeItem('userData');
    localStorage.removeItem('authToken');
    navigate('/signin');
}
  return (
    <div className="min-h-screen  items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Name : {userData.name}</h1>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Email : {userData.email} </h1>
      <form onSubmit={handleSignout}>
        <button id="logout-link"> Sign Out </button>
      </form>
    </div>
  );
}

export default Dashboard;