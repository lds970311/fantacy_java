import React, {lazy, Suspense} from 'react';
import './App.scss';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

const Home = lazy(() => import ("./pages/Home"))
const Count = lazy(() => import("./pages/Count"))


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Suspense fallback={<div>loading...</div>}>
                    <Switch>
                        <Route path="/count" component={Count} exact/>
                        <Route path="/" component={Home} exact render={() => (
                            <Redirect to={"/count"}/>
                        )}/>

                    </Switch>
                </Suspense>

            </BrowserRouter>
        </div>
    );
}

export default App;
