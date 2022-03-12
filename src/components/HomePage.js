import React from "react";


function Home({image}){
    const quickImage = image.map((image) => {
        return image.image
    })

    return (
    <div>
        <h2>Welcome to the Home Page </h2>
        <p>Ever since college, I have been a huge fan of Bob's Burgers. Bob's Burgers is an American animated sitcom that features Bob the restaurant owner and his family. Every episodes are worth the rewatch and I would normally have it on in the background as white noise. </p>
        <p>For all the fans out there, I would like to create a website for Bob's Burgers as my Phase 2 project. Website will include a list of characters that featured in the show and an episode list of all 12 seasons of the show. A check box will be included in the episode list to help keeping track which episode you have watched already.</p>
        <div className="quickimage"> <img src={quickImage[5]} /> </div>
    </div>
    
    )}

export default Home;