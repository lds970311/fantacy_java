//CREATE AT: 2021-11-22

import React from 'react';
import ListItem from "./ListItem";

interface ListData {
    id: string,
    title: string
    completed: boolean
}

interface State {
    listData: ListData[],
    onDelete: Function,
    CompleteChange: Function
}

const List: React.FunctionComponent<State> = ({listData, onDelete, CompleteChange}) => {
    return (
        <ul style={
            {
                listStyle: "none",
                padding: '30px',
                textAlign: "left"
            }
        }>
            {listData.map(data => {
                return (
                    <ListItem id={data.id} title={data.title} completed={data.completed} key={data.id}
                              onDelete={onDelete} CompleteChange={CompleteChange}/>
                )
            })}
        </ul>
    );
};

export default List;
