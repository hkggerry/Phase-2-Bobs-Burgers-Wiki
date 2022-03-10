import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar"
import Home from "./HomePage";
import Characters from "./Characters";
import Episodes from "./Episodes";


function App() {
  const [data, setData] = useState([])
  const [episodes, setEpisodes] = useState([])

  useEffect(()=>{
    fetch("https://bobsburgers-api.herokuapp.com/characters/")
    .then(r => r.json())
    .then(data => setData(data))
  }, [])

  useEffect(()=>{
    fetch("https://bobsburgers-api.herokuapp.com/episodes/")
    .then(r => r.json())
    .then(episode => setEpisodes(episode))
  }, [])


  return (
    <div>
      <Header />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/characters">
            <Characters data={data}/>
          </Route>
          <Route exact path="/episodes">
            <Episodes episodes={episodes}/>
          </Route>
        </Switch>
        
    </div>
  );
}

export default App;
