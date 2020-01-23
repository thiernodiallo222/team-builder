import React from 'react';
import './App.css';
import TeamForm from './TeamForm';
import TeamList from './TeamList';

function App() {
  return (
    <div className="App">
      <div className="left-part"> 
        <p>Please add a member below</p>
        <TeamForm />
      </div>
      <div className="right-part"> 
        <p>Members Names</p>
        <TeamList />
      </div>
    </div>
  );
}

export default App;
