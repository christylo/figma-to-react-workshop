import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {

  const fillerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
  return (
    <>
      <div className="App">
        <h1>Figma to React Workshop Demo :))</h1>
      </div>
      <div className="Cards">
        <Card heading="Marley the Retriever" description={fillerText}/>
        <Card heading="Marley the Retriever" description={fillerText}/>
      </div>
    </>
  );
}

export default App;
