import React, {useState} from 'react';
import {useStore} from "react-redux";

//子组件

interface IChild {
    name: string;
    age: number
}

const Child: React.FC<IChild> = ({name, age}) => {
    console.log("child render")
    return (
        <div>
            <p>this is child {name} {age}</p>
        </div>
    );
};

const useMemoTest = () => {
    console.log("parent render")
    const [age, setAge] = useState<number>(18)
    const [name, setName] = useState<string>("lili")
    return (
        <div>
            <button onClick={() => setAge(age + 1)}>age++</button>
            <Child name={name} age={age}/>
        </div>
    );
};


export default useMemoTest;
