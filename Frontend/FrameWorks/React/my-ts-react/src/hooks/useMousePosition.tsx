import {useEffect, useState} from 'react';

const useMousePosition = () => {

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
        console.log("aaa")
        window.addEventListener("mousemove", handleMouseMove)
        return function () {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])
    return position
};

export default useMousePosition;
