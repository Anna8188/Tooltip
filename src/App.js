import './App.css';
import Tooltip from './component/Tolltip/Tooltip';

function App() {
  return (
<div className="App">
      <Tooltip text="Hello!gbnhhhhhhhhhhhh!!" position="top" color="black" backgroundColor="white">
        <button className='button'>Hover over me</button>
      </Tooltip>
</div>
  );
}
export default App;
