import React from "react";

function CharacterList( {data} ){

    return (
        <div className="character">
            <div className="image">
                <img src={data.image} alt={data.name} height="300px" />
            </div>
            <div className="details">
                <strong>{data.name}</strong>
                <br/>
                <p>{data.occupation}</p>
            </div>
        </div>
    )
}

export default CharacterList;