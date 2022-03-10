import React from "react";

function EpisodeList({episodes}){
    console.log(episodes)
    return (
        <ul className="episodes">
            <div>
                <strong>{episodes.name} S-{episodes.season}.{episodes.episode}</strong>
            </div>
        </ul>
    )
}

export default EpisodeList;