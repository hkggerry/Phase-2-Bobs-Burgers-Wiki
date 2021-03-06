import React from "react";

function Season1({episodes}){

    const season1List = episodes.map(episode => <li>{episode.name}</li>)
    const season1Ep = season1List.slice(0,13)

    return (
        <div>
            <h4>Episodes 1-12</h4>
            {season1Ep}
        </div>
    )

}
export default Season1;