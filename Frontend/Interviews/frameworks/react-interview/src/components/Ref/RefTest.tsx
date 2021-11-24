import React, {useRef} from 'react';
import MyRef from "./MyRef";


const RefTest = () => {
    const ref = useRef<HTMLButtonElement>(null)
    const ref2 = useRef(null)
    return (
        <div>
            <button ref={ref}>++</button>
        </div>
    );
};

export default RefTest;
