import logo from './logo.svg';
import './App.css';
import Info from './component/HuseState';
import UserEF from './component/HuseEffect';
import Counter from './component/HuseReduces';
import AverageMemo from './component/HuseHooks';

function App() {
  return (
    <div className="App">
      <AverageMemo/>
    </div>
  );
}

export default App;
