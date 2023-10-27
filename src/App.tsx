import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getHelia } from './lib/helia';
import { Helia } from 'helia';
import Dial from './components/dial';
import { useHelia } from './hooks/useHelia';
import Upload from './components/upload';
import Download from './components/download';

function App() {
  const {helia, conns} = useHelia()


  return (
    <div className="App">
      {helia ?
        <div>
          <Dial />
          <Upload />
          <Download />
          <div>
            {conns.map((v) => <div>{v.toString()}</div>)}
          </div>
        </div>
        :
        <div>Loading...</div>
      }
    </div>
  );
}

export default App;
