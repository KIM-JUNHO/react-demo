import React from 'react';
import Topbar from './components/Tobbar/Topbar';
import Side from './components/Side/Side';
import Main from './pages/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Side />
      <div>
        <Topbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
