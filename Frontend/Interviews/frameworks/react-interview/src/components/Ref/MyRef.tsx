import React from 'react';

interface Props {
    ref: React.RefObject<any>
}


const MyRef: React.FunctionComponent = () => {
    function getData() {
        alert('hahaha')
    }

    return (
        <div>

        </div>
    );
};

export default MyRef;
