import './App.css';
import FixedMenu from './component/FixedMenu';
import FakeMenu from './component/FakeMenu';
import Side from './component/Side';
import Content from './component/Content';
import React, {useState, useEffect, useRef} from 'react';


function App() {
  useEffect(() => { document.body.style.backgroundColor = '#2b2b2b' }, [])
  return (
    <div className="App">
      <div className="boxs"><FixedMenu /></div>
      <div className="boxs"><FakeMenu /></div>
      <div className="boxs"><Side /></div>
      <div className="boxs"><Content /></div>
    </div>
  );
}

export default App;
