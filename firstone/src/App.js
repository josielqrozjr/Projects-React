import './App.css';
import FirstComponent from './components/FirstComponent';
import Hooks from './components/Hooks';
import Images from './components/Images';

function App() {
  return (
    <div className="App">
      <h1>Olá, React!</h1>
      <Hooks />
      <FirstComponent />
      <Images />
    </div>
  );
}

export default App;
