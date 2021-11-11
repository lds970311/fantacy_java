import React from 'react';
import Style from "./navigator.module.scss"

interface INavigationItem {
    name: string
    path: string
}

interface INavigationOptions {
    options: INavigationItem[]
}

const Navigator: React.FunctionComponent<INavigationOptions> = (props: INavigationOptions): JSX.Element => {
    const {options} = props;
    return (
        <div className={Style.navigator}>
            <ul>
                {
                    options.map(item => {
                        return (
                            <a href={item.path} key={item.name}>{item.name}</a>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Navigator;
