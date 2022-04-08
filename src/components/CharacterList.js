import React, {useState} from "react";

function CharacterList( {data} ){
    const [count, setCount] = useState(0)


    function increment(){
        return setCount(count + 1)
    }


    return (
        <div className="character">
            <div className="image">
                <img src={data.image} alt={data.name} height="300px" />
            </div>
            <div className="details">
                <strong>{data.name}</strong>
                <br/>
                <p>{data.occupation}</p>
                <button onClick={increment}>{count}</button>
            </div>
        </div>
    )
}

export default CharacterList;