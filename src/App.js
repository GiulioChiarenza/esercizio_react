import logo from './logo.svg';
import './App.css';
import ButtonComponent from './ButtonComponent';
import ImageComponent from './ImageComponent';

function App() {
  return (
    <div className="App">
      
      <ButtonComponent text='salva'/>


<ImageComponent url="http://placekitten.com/400" textAlt="gatto"/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
