import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import {ProtectedRoutes} from "./components/ProtectedRoute/ProtectedRoute";

function App() : any {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<div>Hello world!</div>} />
              <Route path="/secret" element={<ProtectedRoutes><div>Secret</div></ProtectedRoutes>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
