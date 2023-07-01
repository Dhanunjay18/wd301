import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from "./NotFound";
import Signup from './pages/signup';
// Dialogue 1: First, we've to import the Signin component
import Signin from './pages/signin';
import Dashboard from './pages/dashboard';
import { ProtectedRoute } from './ProtectedRoute';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        { /* Dialogue 2: Then we will add route for signin path and render Signin page there */}
        <Route path="/signin" element={<Signin/>} />        
        <Route path="/dashboard" element={<ProtectedRoute element={ <Dashboard/> } />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </div>
  );
};
export default App;