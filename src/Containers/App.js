import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './LandingPage/index.js';
import "./App.css";
// import PrivateRoute from "./PrivateRoute/index.js";

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                {/* <Route path="/main" element={<PrivateRoute><AnnoncesPage/></PrivateRoute>} />
                <Route path="/main/profile" element={<PrivateRoute><ProfilePage/></PrivateRoute>} />
                <Route path="*" element={<ErrorPage/>} /> */}
            </Routes>
        </Router>
    );
}
export default App;