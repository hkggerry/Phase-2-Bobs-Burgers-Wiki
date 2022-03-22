import React from "react";

function Home({data}){

    const characterData = data.map((eachCharacter) => {
        return eachCharacter.image
    })

    return (
    <div class="center">
        <center>
            <br />
        <h2>Welcome to the Bob's Burgers Wiki!</h2>
        <p>Bob's Burgers is an American animated sitcom that features restaurant owner Bob, wife Linda, and his three spicy children.</p> 
        <p>You can find all the basic information for this show through the Navagation bars above.</p>
        
        <div> 
            <img src={characterData[46]}/>
            <img src={characterData[167]}/>
            <img src={characterData[271]}/>
            <img src={characterData[276]}/>
            <img src={characterData[472]}/>
            <h4>Big SHOUTOUT to my friends and family for the continous support, hope you enjoy this little project of mine!</h4>
            <p>🍔 🍔 🍔</p>
        </div>
        </center>
    </div>
    
    )}

export default Home;