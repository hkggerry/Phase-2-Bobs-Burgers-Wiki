import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./HomePage";
import Characters from "./Characters";
import SuggestionBox from "./SuggestionBox";
import Season from "./Season";

function App() {
  const [data, setData] = useState([])
  const [episodes, setEpisodes] = useState([])
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
        <NavBar episodes={episodes}/> 
        <Switch>
          <Route exact path="/">
            <Home data={data}/>
          </Route>
          <Route exact path="/characters">
            <Characters data={filteredCharacter} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
          </Route>
          <Route exact path="/suggestionbox">
            <SuggestionBox suggestions ={suggestions} onAddItem={handleAddItem}/>
          </Route>
          <Route exact path="/season/:id" >
            <Season episodes={episodes}/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
