import React from 'react';
import {MsgContext} from '../../../pages/Home/Home';


const MsgConsumer = () => {
    return (
        <>
            <MsgContext.Consumer>
                {value => {
                    return (
                        <p>{value}</p>
                    )
                }}
            </MsgContext.Consumer>
        </>
    );

}

export default MsgConsumer;
