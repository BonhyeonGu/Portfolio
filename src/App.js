import './App.css';
import FixedMenu from './component/FixedMenu';
import FakeMenu from './component/FakeMenu';
import Side from './component/Side';
import Content from './component/Content';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => { 
    document.body.style.backgroundColor = '#ffffff'; 
  }, []);

  return (
    <div className="App">
      <div className="fixed-menu boxsNoMobile"><FixedMenu /></div> {/* 왼쪽에 고정된 메뉴 */}
      <div className="boxs boxsMobile"><i>bonhyeon.9bon.org: Mobile</i></div> {/* 왼쪽에 고정된 메뉴 */}
      <div className="main-content">
        <div className="boxs"><FakeMenu /></div>
        <div className="boxs"><Side /></div>
        <div className="boxs"><Content /></div>
      </div>
    </div>
  );
}

export default App;