import React from "react";
import { useParams } from "react-router-dom";

function Season({episodes}){

    const { id } = useParams();
    const seasonList = episodes.map(episode => <li>{episode.name}</li>)

    // const print = () =>{
    //     if (id = 1){
    //         return seasonList.slice(0,13)
    //     }else if (id=2){
    //         return seasonList.slice(13,22)
    //     }
    // }
    // const seasonEp = seasonList.slice(0,13)

    // const seasonList = episodes.map(episode => {
    //     if (episode.season = 1) {
    //         <li>{episode.name.slice(0,13)}</li>
    //     }else if (episode.season = 2) {
    //         <li>{episode.name.slice(13,22)}</li>
    //     }
    // })

    return(
        <div>
            <h2>Season: {id}</h2>
            {seasonList}
        </div>
    )

}

export default Season;