import React, {Component} from 'react';
import HelloWorld from "../components/HelloWorld";
import LikeButton from "../components/LikeButton";
import MousePosition from "../components/MousePosition";
import CitySelectors from "../components/CitySelectors";

class Home extends Component {
    render() {
        return (
            <div className={"Home"}>
                <HelloWorld message={"hello world"}/>
                <LikeButton/>
                <MousePosition/>
                <CitySelectors/>
            </div>
        );
    }
}

export default Home;