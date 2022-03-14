import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./HomePage";
import Characters from "./Characters";
import Episodes from "./Episodes";
import Season1 from "./Seasons/Season1"
 

function App() {
  const [data, setData] = useState([])
  const [episodes, setEpisodes] = useState([])
  const [image, quickImage] = useState([])
  const [searchTerm, setSearchTerm] = useState("")  

  useEffect(()=>{
    fetch("http://localhost:3000/characters")
    .then(r => r.json())
    .then(data => setData(data))
  }, [])

  useEffect(()=>{
    fetch("http://localhost:3000/episodes")
    .then(r => r.json())
    .then(episode => setEpisodes(episode))
  }, [])

  useEffect(()=>{
    fetch("http://localhost:3000/endCreditsSequence")
    .then(r => r.json())
    .then(image => quickImage(image))
  }, [])

  const filteredCharacter = data.filter(name => name.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
      <h1>Bob's Burgers Wiki🍔 </h1>
      <hr />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home image={image}/>
          </Route>
          <Route exact path="/characters">
            <Characters data={filteredCharacter} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
          </Route>
          <Route exact path="/episodes">
            <Episodes episodes={episodes}/>
          </Route>
          <Route exact path="/season1" >
            <Season1 />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
