import React from 'react';
import Style from "./home.module.scss"

const Home: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className={Style.home}>
            this is Home
        </div>
    );
};

export default Home;
