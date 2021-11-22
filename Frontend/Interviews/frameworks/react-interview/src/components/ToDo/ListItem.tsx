import React from 'react';

interface State {
    id: string,
    title: string
    completed: boolean,
    onDelete: Function,
    CompleteChange: Function
}

const ListItem: React.FunctionComponent<State> = (props: State) => {


    function handleChange(id: string) {
        props.CompleteChange(!props.completed, id)
    }

    return (
        <li style={
            {
                height: "30px",
                lineHeight: "30px",
                fontFamily: "sans-ser",
                display: "flex",
                marginTop: "10px",
                justifyContent: "space-between",
            }
        }>
            <p>
                <input type="checkbox" checked={props.completed} onChange={() => handleChange(props.id)}/>
                <span
                    style={props.completed ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{props.title}</span>
            </p>

            <button onClick={() => props.onDelete(props.id)}>删除</button>
        </li>
    );
};

export default ListItem;
