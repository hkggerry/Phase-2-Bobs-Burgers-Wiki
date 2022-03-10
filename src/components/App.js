import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar"
import HomePage from "./HomePage";
import Characters from "./Characters";
import Episodes from "./Episodes";


function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch("https://bobsburgers-api.herokuapp.com/characters/")
    .then(r => r.json())
    .then(data => setData(data))
  }, [])


  return (
    <div>
      <Header />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/characters">
            <Characters data={data}/>
          </Route>
          <Route exact path="/episodes">
            <Episodes />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
