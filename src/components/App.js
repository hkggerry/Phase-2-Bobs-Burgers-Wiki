import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./HomePage";
import Characters from "./Characters";
import Episodes from "./Episodes";
import SuggestionBox from "./SuggestionBox";
import Season1 from "./Seasons/Season1"
import Season2 from "./Seasons/Season2"
import Season3 from "./Seasons/Season3"
import Season4 from "./Seasons/Season4"
import Season5 from "./Seasons/Season5"
import Season6 from "./Seasons/Season6"
import Season7 from "./Seasons/Season7"
import Season8 from "./Seasons/Season8"
import Season9 from "./Seasons/Season9"
import Season10 from "./Seasons/Season10"
import Season11 from "./Seasons/Season11"
import Season12 from "./Seasons/Season12"
 

function App() {
  const [data, setData] = useState([])
  const [episodes, setEpisodes] = useState([])
  const [image, quickImage] = useState([])
  const [searchTerm, setSearchTerm] = useState("")  
  const [suggestions, setSuggestions] = useState([])

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

  useEffect(()=>{
    fetch("http://localhost:3000/suggestionBox")
    .then(r => r.json())
    .then(input => setSuggestions(input))
  }, [])

  function handleAddItem(newSuggestion){
    console.log(suggestions)
    setSuggestions([...suggestions, newSuggestion])
  }


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
          <Route exact path="/suggestionbox">
            <SuggestionBox suggestions ={suggestions} onAddItem={handleAddItem}/>
          </Route>
          <Route exact path="/season1" >
            <Season1 episodes={episodes}/>
          </Route>
          <Route exact path="/season2" >
            <Season2 episodes={episodes}/>
          </Route>
          <Route exact path="/season3" >
            <Season3 episodes={episodes}/>
          </Route>
          <Route exact path="/season4" >
            <Season4 episodes={episodes}/>
          </Route>
          <Route exact path="/season5" >
            <Season5 episodes={episodes}/>
          </Route>
          <Route exact path="/season6" >
            <Season6 episodes={episodes}/>
          </Route>
          <Route exact path="/season7" >
            <Season7 episodes={episodes}/>
          </Route>
          <Route exact path="/season8" >
            <Season8 episodes={episodes}/>
          </Route>
          <Route exact path="/season9" >
            <Season9 episodes={episodes}/>
          </Route>
          <Route exact path="/season10" >
            <Season10 episodes={episodes}/>
          </Route>
          <Route exact path="/season11" >
            <Season11 episodes={episodes}/>
          </Route>
          <Route exact path="/season12" >
            <Season12 episodes={episodes}/>
          </Route>
    
        </Switch>
    </div>
  );
}

export default App;
