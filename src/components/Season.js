import React from "react";
import { useParams } from "react-router-dom";

function Season({episodes}){

    const { id } = useParams("");
    const seasonList = episodes.map(episode => <li>{episode.name}</li>)

        if ( id == 1){
            return seasonList.slice(0,13)
        }else if (id == 2){
            return seasonList.slice(13,22)
        }else if (id == 3){
            return seasonList.slice(22,45)
        }else if (id == 4){
            return seasonList.slice(45,67)
        }else if (id == 5){
            return seasonList.slice(67,88)
        }else if (id == 6){
            return seasonList.slice(88,107)
        }else if (id == 7){
            return seasonList.slice(107,128)
        }else if (id == 8){
            return seasonList.slice(128,150)
        }else if (id == 9){
            return seasonList.slice(150,172)
        }else if (id == 10){
            return seasonList.slice(172,194)
        }else if (id == 11){
            return seasonList.slice(194,216)
        }else if (id == 12){
            return seasonList.slice(216,228)
        }
        
    return(
        <div>
            <h2>Season: {id}</h2>
            {seasonList}
        </div>
    )

}

export default Season;