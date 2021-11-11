import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigator from "./components/Navigator/Navigator";

const App = () => {
    return (
        <div className="App">
            <Navigator options={[
                {
                    name: "首页",
                    path: '/home'
                }
            ]}/>
            <BrowserRouter>
                <Route path="/home" component={Home}/>
            </BrowserRouter>
        </div>
    )
}

export default App
