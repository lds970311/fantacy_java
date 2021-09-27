import React, {useState, useEffect} from 'react';

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(false)
    useEffect(() => {
        document.title = `${like} times`
    }, [like])
    return (
        <div>
            <button onClick={() => setLike(like + 1)}>
                {like} 赞
            </button>
            <button onClick={() => setOn(!on)}>
                {on ? "ON" : "OFF"}
            </button>
        </div>
    );
};

export default LikeButton
