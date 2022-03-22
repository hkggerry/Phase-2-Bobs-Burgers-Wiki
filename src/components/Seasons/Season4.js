import React from "react";

function Season4({episodes}){
    
    const season4List = episodes.map(episode => <li>{episode.name}</li>)
    const season4Ep = season4List.slice(45,67)

    return (
        <div>
            <h4>Episodes 45-66</h4>
            {season4Ep}
        </div>
    )

}
export default Season4;