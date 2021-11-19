//CREATE AT: 2021-11-19
import React from 'react';

const WithMouse = (Component: any) => {
    class WithMouse extends React.Component {
        constructor(props: any) {
            super(props);
        }

        state = {
            x: 0,
            y: 0
        }

        getInfo = (): void => {
            console.log("info")
        }

        componentDidMount() {
            window.addEventListener("mousemove", this.handleMouseMove.bind(this));
        }

        componentWillUnmount() {
            console.log("removed")
            window.removeEventListener("mousemove", this.handleMouseMove.bind(this))
        }

        render() {
            return (
                <Component {...this.props} position={this.state}/>
            )
        }

        private handleMouseMove(event: MouseEvent) {
            this.setState({
                x: event.pageX,
                y: event.pageY
            })
        }
    }

    return WithMouse
};

export default WithMouse;
