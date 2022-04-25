import React from 'react';
import './App.css';
import MeteoWidget from './MeteoWidget';

function App() {  
  return (
    <div className="App">
      <MeteoWidget city="Montpellier" code={34000}/>
    </div>
  );
}

export default App;
