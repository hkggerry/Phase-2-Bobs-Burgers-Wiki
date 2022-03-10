import React from "react";
import EpisodeList from "./EpisodeList";

function Episodes( {episodes} ) {
    const episodeList = episodes.map(eachEpisode => {
        return <EpisodeList key={eachEpisode.id} episodes={eachEpisode}/>
    })

    return (
    <div>
        {episodeList}
    </div>
    )  
}
 
export default Episodes;