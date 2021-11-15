import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigator from "./components/Navigator/Navigator";
import Index from "./pages/Index/Index";
import Root from "./components/Root/Root";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigator options={[
                    {
                        name: "首页",
                        path: '/'
                    },
                    {
                        name: "咨询",
                        path: '/home'
                    }
                ]}>123</Navigator>
                <Root/>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default App
