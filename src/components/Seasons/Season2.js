import React from "react";

function Season2({episodes}){
    
    const season2List = episodes.map(episode => <li>{episode.name}</li>)
    const season2Ep = season2List.slice(13,22)

    return (
        <div>
            <h4>Episodes 13-21</h4>
            {season2Ep}
        </div>
    )

}
export default Season2;