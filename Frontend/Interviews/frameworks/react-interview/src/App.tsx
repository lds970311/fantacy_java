import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {lazy, Suspense} from "react";
import Advanced from "./pages/Advanced/Advanced";

const Home = lazy(() => import ("./pages/Home/Home"));

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/advance"} element={<Advanced/>}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    )
}

export default App
