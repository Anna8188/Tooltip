import './App.css';
import Tooltip from './component/Tolltip/Tooltip';

function App() {
  return (
<div className="App">
      <Tooltip text="Hello!" position="top" color="black" backgroundColor="white">
        <button className='button'>Hover over me</button>
      </Tooltip>
      <Tooltip text="Hello!" position="bottom" color="black" backgroundColor="white">
        <button className='button'>Hover over me</button>
      </Tooltip>
</div>
  );
}
export default App;
