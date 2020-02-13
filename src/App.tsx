import React from 'react';
import Side from './components/Side/Side';
import Main from './pages/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Side />
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
