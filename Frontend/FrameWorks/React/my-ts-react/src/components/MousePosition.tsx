import React, {useState, useEffect} from 'react';

const MousePosition: React.VoidFunctionComponent = () => {
    const [position, setPosition] = useState({
        X: 0,
        Y: 0
    })

    function handleMouseMove(event: MouseEvent) {
        setPosition({
            X: event.clientX,
            Y: event.clientY
        })
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove)
        return function () {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [position])
    return (
        <div>
            <p>X:{position.X}, Y:{position.Y}</p>
        </div>
    );
};

export default MousePosition;
