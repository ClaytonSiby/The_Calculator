import './App.css';
import Math from './components/Math';

function App() {
  const addition = (a, b) => a + b;
  return (
    <div className="App">
      <h1>Milestone1 Project Setup</h1>
      <Math addNumbers={addition} />
    </div>
  );
}

export default App;
