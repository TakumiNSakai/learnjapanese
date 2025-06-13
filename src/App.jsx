import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Navbar.jsx'
import Learn from './Learn.jsx'
import Practice from './Practice.jsx'

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/learn" element = {<Learn />} />
                        <Route path="/practice" element = {<Practice />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}


export default App
