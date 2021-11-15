import React from 'react';
import Style from "./navigator.module.scss"
import {useNavigate} from "react-router-dom";
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
    const navigate = useNavigate()
    const {options} = props;
    return (
        <div className={Style.navigator}>
            <img src={img1} alt="avatar" style={{width: "30px", height: "30px"}}/>
            <ul>
                {
                    options.map(item => {
                        return (
                            <li onClick={() => navigate(item.path, {replace: false})} key={item.name}>{item.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};


export default Navigator;
