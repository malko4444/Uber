import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import Home from './Home';
import UserLogin from './UserLogin';
import UserSignup from './UserSignup';
import CaptainSignup from './CaptainSignup';
import CaptainLogin from './CaptainLogin';
import Start from './Start';
import UserProtectedWrapper from './userProtectedWrapper';
import UserLogout from './UserLogout';
import UserTodo from './UserTodo';

export default function Routing() {
    return (
        <Router>
             <Routes>
                <Route path="/start" element={
                    <UserProtectedWrapper >
                        <Start />
                    </UserProtectedWrapper>
                } />

            </Routes>
            <Routes>
                <Route path="/user/logout" element={
                    <UserProtectedWrapper >
                        <UserLogout />
                    </UserProtectedWrapper>
                } />

            </Routes>
           
            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>
            <Routes>
                <Route path="/userLogin" element={<UserLogin />} />
            </Routes>
            <Routes>
                <Route path="/userSignup" element={<UserSignup />} />
            </Routes>
            <Routes>
                <Route path="/captainSignup" element={<CaptainSignup />} />
            </Routes>
            <Routes>
                <Route path="/captainLogin" element={<CaptainLogin />} />
            </Routes>
            <Routes>
                <Route path="/userTodo" element={<UserTodo />} />
            </Routes>
        </Router>
    );
}
