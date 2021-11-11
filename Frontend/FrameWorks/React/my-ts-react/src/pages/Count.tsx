import React, {useEffect, useRef, useState} from 'react';
import useMockData from "../hooks/useMockData";

const Count: React.FC = (): JSX.Element => {

    const [num, setNum] = useState(0);
    const selectedRef: React.MutableRefObject<any> = useRef(null);
    const [data, loading] = useMockData("https://mock.mengxuegu.com/mock/6188d0e54c5d9932f7e7576b/mock_test/info")
    console.log(data)
    useEffect(() => {
        console.log("123")
    }, [num])
    const increment = (): void => {
        let value = Number(selectedRef.current.value)
        setNum(num + value)
    }
    const decrement = (): void => {
        let value = Number(selectedRef.current.value)
        setNum(num - value)
    }
    const incrementIfOdd = () => {
        if (num % 2 !== 0) {
            let value = Number(selectedRef.current.value)
            setNum(num + value)
        }
    }

    const incrementAsync = () => {
        setTimeout(() => {
            increment()
        }, 500)
    }

    return (

        <div className="count">
            <h1>当前求和为：{num}</h1>
            <select ref={selectedRef}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={increment}>+</button>
            &nbsp;
            <button onClick={decrement}>-</button>
            &nbsp;
            <button onClick={incrementIfOdd}>当前求和为奇数再加</button>
            &nbsp;
            <button onClick={incrementAsync}>异步加</button>
            &nbsp;
            <ul>
                {!loading ? (Object.keys(data).map((key: string, index: number) => {
                    return (
                        <li key={index}>
                            {key}
                        </li>
                    )
                })) : null
                }
            </ul>
        </div>
    );
};

export default Count;

