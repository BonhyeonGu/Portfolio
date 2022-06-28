import './App.css';
import FixedMenu from './component/FixedMenu';
import Content from './component/Content';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Content />
      </div>
      <div className="menu">
        <FixedMenu />
      </div>
    </div>
  );
}

export default App;
