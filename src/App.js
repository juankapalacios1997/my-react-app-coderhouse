import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import CategoryListContainer from './components/ItemList/categoryListContainer/CategoryListContainer';
// import Posts from './components/API/Posts';
import './App.css';
import SingleItemContainer from './components/ItemList/singleItemContainer/SingleItemContainer';
import Cart from './components/Cart/Cart';
import Provider from './components/Provider/Provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/categories/:categoryId" element={<CategoryListContainer />} />
          <Route exact path="/items/:itemId" element={<SingleItemContainer />} />
          <Route exact path="/cart" element={<Cart />} /> 
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
