import React, {Component} from 'react';
import WithMouseTest from "../../components/Advacned/withMouseTest";

class Advanced extends Component {
    private eleRef: React.RefObject<any>;

    constructor(props: any) {
        super(props);
        this.eleRef = React.createRef();
    }

    render() {

        return (
            <div className="advance">
                <h2 onClick={this.showInfo.bind(this)}>Advance component Test</h2>
                <WithMouseTest ref={this.eleRef}/>
            </div>
        );
    }

    private showInfo() {
        this.eleRef.current.getInfo()
        console.log(this.eleRef.current);
    }
}

export default Advanced;
