import React, {Component} from 'react';
import WithMouse from "./WithMouse";

interface IPosition {
    x: number
    y: number
}

interface withMouseTestProps {
    position: IPosition
}

class WithMouseTest extends Component<withMouseTestProps> {
    constructor(props: withMouseTestProps) {
        super(props);
    }

    render() {
        const {x, y} = this.props.position
        return (
            <div className="withmouse">
                {x} {y}
            </div>
        );
    }
}

export default WithMouse(WithMouseTest);
