import React from 'react';
import useMousePosition from "../hooks/useMousePosition";

const MousePosition: React.VoidFunctionComponent = () => {
    const position = useMousePosition();
    return (
        <div>
            <p>X:{position.X}, Y:{position.Y}</p>
        </div>
    );
};

export default MousePosition;
