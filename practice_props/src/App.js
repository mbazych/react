import React from 'react';
import Joke from "./Joke";
import './App.css';

function App() {
  return (
      <div className="jokes">
        <Joke
          joke = "gsadfiojasdhijasdoijhsoadjihijoasoijdh?"
          pun = "sfhkmsfhskdfhksdkfhklafh"
        />
        <Joke

            pun = "No dziu!"
        />
        <Joke
            joke = "Dziu?"
            pun = "No dziu!"
        />
        <Joke
            joke = "Dziu?"
            pun = "No dziu!"
        />

      </div>
  )
}

export default App