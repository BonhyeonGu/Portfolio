import './App.css';
import FixedMenu from './component/FixedMenu';
import Content from './component/Content';

function App() {
  return (
    <div className="App">
      <div className="a"><FixedMenu /></div>
      <div className="b"><Content /></div>
    </div>
  );
}

export default App;
