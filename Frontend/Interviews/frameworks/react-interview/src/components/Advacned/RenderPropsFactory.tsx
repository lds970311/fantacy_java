import React, {PureComponent} from 'react';

interface Props {
    render?: Function
}

interface State {
    width: number
    height: number
}

class RenderPropsFactory extends PureComponent<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            width: 100,
            height: 100
        }
    }

    render() {
        return (
            <div>
                {this.props.render ? this.props.render(this.state) : ""}
            </div>
        );
    }
}


export default RenderPropsFactory;
