import React from "react";

function EpisodeList({episodes}){
    return (
        <ul className="episodes">
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <input type="checkBox" />
                <strong>{episodes.name} S-{episodes.season}.{episodes.episode}</strong>             
            </div>
        </ul>
    )
}

export default EpisodeList;