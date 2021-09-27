import React from 'react';

interface IHelloWorldProps {
    message: string;
}

const HelloWorld: React.FC<IHelloWorldProps> = (props) => {
    return (
        <div>
            <h3>{props.message}</h3>
        </div>
    );
};

HelloWorld.defaultProps = {
    message: "hello"
}
export default HelloWorld;
