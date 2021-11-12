import React, {Component} from 'react';

interface IProps {
    msg?: string
}

interface IState {
    count: number
}

class Root extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            count: 0
        }
    }


    componentDidMount() {
        this.setState({count: this.state.count + 1});
        console.log(this.state.count)
        this.setState({count: this.state.count + 1})
        console.log(this.state.count)
        setTimeout(() => {
            this.setState({count: this.state.count + 1})
            console.log(this.state.count)
        }, 0)
        setTimeout(() => {
            this.setState({count: this.state.count + 1})
            console.log(this.state.count)
        }, 0)
    }

    render() {
        return (
            <div>
                {this.state.count}
            </div>
        );
    }
}

export default Root;
