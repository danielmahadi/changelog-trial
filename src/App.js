import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div style={{
          marginBottom: '10px'
        }}>
          The new Begining
        </div>
        <div style={{
          fontSize: '16px',
          marginBottom: '15px'
        }}>
          Here are the cool features:
          <br/>
          Blazing fast | Eazy | Friendly | Not like others
        </div>
        <div className='code' style={{
          border: '1px solid white',
          borderRadius: '10px',
          padding: '10px',
          fontSize: '12px',
          width: '150px'
        }}>
          npm run version
        </div>
      </header>
    </div>
  );
}

export default App;
