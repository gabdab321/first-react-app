import React, {useState} from 'react';

const Counter = (props) => {
    console.log(props)
    const [likes, setLikes] = useState(props.startLikes)

    return (
        <div>
            <h1>Likes: {likes}</h1>

            <button onClick={() => {setLikes(likes + 1)}}>Increment</button>
            <button onClick={() => {setLikes(likes - 1)}}>Decrement</button>
        </div>
    );
};

export default Counter;