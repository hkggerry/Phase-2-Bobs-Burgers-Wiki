import React from "react";

function CharacterList( {data} ){

    return (
        <div className="character">
            <div className="image">
                <img src={data.image} alt={data.name} />
            </div>
            <div className="details">
                <strong>{data.name}</strong>
                <br/>
                <span>{data.occupation}</span>
            </div>
        </div>
    )
}

export default CharacterList;