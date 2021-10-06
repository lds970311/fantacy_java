import React from 'react';
import './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./pages/Home"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path="/" component={Home}/>
            </BrowserRouter>
        </div>
    );
}

export default App;