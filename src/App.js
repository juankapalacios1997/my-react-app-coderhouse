import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar /> 
      </header>
      <div className="section">
        <ItemListContainer msg="Buenos días a todos"/>
      </div>
    </div>
  );
}

export default App;
