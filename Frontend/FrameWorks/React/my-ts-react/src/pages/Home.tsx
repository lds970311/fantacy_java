import React, {Component} from 'react';
import HelloWorld from "../components/HelloWorld";
import LikeButton from "../components/LikeButton";
import MousePosition from "../components/MousePosition";

class Home extends Component {
    render() {
        return (
            <div className={"Home"}>
                <HelloWorld message={"hello world"}/>
                <LikeButton/>
                <MousePosition/>
            </div>
        );
    }
}

export default Home;