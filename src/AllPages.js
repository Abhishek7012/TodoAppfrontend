import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import TodoApp from './TodoPage/TodoApp';
import Loginpage from './Login/Loginpage';
import Signuppage from './Signup/Signuppage';



function AllPages()  {
    return (
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<TodoApp />} >
          </Route>
        <Route exact path="/login" element={<Loginpage/>} >
        </Route>
        <Route exact path="/signup" element={<Signuppage />} >
        </Route>
        </Routes>
      </BrowserRouter>
  
  );
    }
    
  
  export default AllPages;