import React, {useState} from 'react';
import Style from "./todo.module.scss"
import List from "../../components/ToDo/List"
import InputItem from "../../components/ToDo/InputItem";
import {nanoid} from "nanoid"

const ToDo: React.FunctionComponent = () => {
    const [listData, setListData] = useState([
        {
            id: '1',
            title: '标题1',
            completed: false
        },
        {
            id: '2',
            title: '标题2',
            completed: false
        },
        {
            id: '3',
            title: '标题3',
            completed: true
        }
    ]);

    function addItem(content: string) {
        console.log(content)
        setListData([...listData, {
            id: nanoid(3),
            title: content,
            completed: false
        }])
    }

    function deleteItem(id: string) {
        setListData(listData.filter(item => item.id !== id))
    }

    function completeChange(val: boolean, id: string) {
        const newList = Array.from(listData)
        for (let i = 0; i < newList.length; i++) {
            if (newList[i].id === id) {
                newList[i].completed = val
                break
            }
        }
        setListData(newList)
    }

    return (
        <div className={Style.todo}>
            <h2>TODOLIST</h2>
            <InputItem addItem={addItem}/>
            <List listData={listData} onDelete={deleteItem} CompleteChange={completeChange}/>
        </div>
    );
};

export default ToDo;
