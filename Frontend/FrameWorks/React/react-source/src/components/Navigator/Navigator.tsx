import React from 'react';
import Style from "./navigator.module.scss"
import {useHistory} from "react-router-dom";
import img1 from "../../../assets/01.jpeg"

interface INavigationItem {
    name: string
    path: string
}

interface INavigationOptions {
    options: INavigationItem[]
    children: any
}

const Navigator: React.FunctionComponent<INavigationOptions> = (props: INavigationOptions): JSX.Element => {
    const history = useHistory()
    const {options} = props;
    return (
        <div className={Style.navigator}>
            <img src={img1} alt="avatar" style={{width: "30px", height: "30px"}}/>
            <ul>
                {
                    options.map(item => {
                        return (
                            <li onClick={() => history.push(item.path)} key={item.name}>{item.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};


export default Navigator;
