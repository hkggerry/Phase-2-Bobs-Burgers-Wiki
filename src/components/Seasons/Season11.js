import React from "react";

function Season11({episodes}){
    
    const season11List = episodes.map(episode => <li>{episode.name}</li>)
    const season11Ep = season11List.slice(194,216)

    return (
        <div>
            <h4>Episodes 194-215</h4>
            {season11Ep}
        </div>
    )

}
export default Season11;