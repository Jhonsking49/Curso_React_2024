import React, { useState } from 'react';

const initialState = { juan: 5, otro:0 };
const contadorDoble = () => {
    const [friends, setFriends] = useState(initialState);
    function handleIncrementJuan(){
        setFriends({...friends, juan: friends.juan + 1 });
    }
    function handleIncrementOtro(){
        setFriends({...friends, otro: friends.otro + 1 });
    }
    return (
        <>
        <div>
            <span>Juan tiene : <strong>{friends.juan}</strong></span>
            <button onClick={handleIncrementJuan}> Agregamos amigo</button>
        </div>
        <div>
            <span>Otro tiene : <strong>{friends.otro}</strong></span>
            <button onClick={handleIncrementOtro}> Agregamos amigo</button>
        </div>
        </>
    )
}

export default contadorDoble