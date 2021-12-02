import React, {useState} from 'react';


interface State {
    addItem: (content: string) => void;
}

const InputItem: React.FunctionComponent<State> = (props: State) => {
    const [val, setVal] = useState("")

    function clickHandler() {
        const {addItem} = props
        if (val.trim() !== "") {
            addItem(val)
            setVal("")
        }
    }

    function handleInputChange(event: any) {
        setVal(event.target.value)
    }

    return (
        <div className="input-item">
            <input type="text" value={val} onChange={handleInputChange}
                   style={
                       {
                           width: "200px",
                           marginRight: "15px"
                       }}
            />
            <button onClick={clickHandler}>新增</button>
        </div>
    );
};

export default InputItem;
