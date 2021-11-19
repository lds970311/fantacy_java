import React, {Component} from 'react';
import Style from "./home.module.scss"
import MsgConsumer from "../../components/Home/MsgConsumer/MsgComsumer";

export const MsgContext = React.createContext("hello")

class Home extends Component {
    constructor(props: any) {
        super(props)
    }

    state = {
        msg: "hello"
    }

    handleClick() {
        console.log("123")
        this.setState({
            msg: "world"
        })
    }

    render() {
        return (
            <div className={Style.home}>
                this is Home
                <MsgContext.Provider value={this.state.msg}>
                    <MsgConsumer/>
                    <button onClick={this.handleClick.bind(this)}>切换msg</button>
                </MsgContext.Provider>
            </div>
        );
    }
}

export default Home;
