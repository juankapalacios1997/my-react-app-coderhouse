import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
// import ProductList from "../ProductList/ProductList";
// import { getAllItems } from "../../services/getItems";
import ItemCard from "../itemCard/ItemCard";
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import './ItemListContainer.css';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [stock, setStock] = useState(0);
  // const docRef = doc(db, '/items', 'McHOmGjJSnDgv0xpXiUX');
  const itemsRef = collection(db, 'items')

  useEffect(() => {
    getDocs(itemsRef)
    .then((querySnapshot) => {
      const itemsList = [];
      querySnapshot.forEach((item) => {
        itemsList.push({...item.data(), id: item.id});
      })
      setItems(itemsList);
    })
  }, []);


  return (
    <div className="item-list-container">
      <div className="greeting-container">
        <h1 className="msg" style={{ fontSize: "32px", fontFamily: "Courier New, sans serif", margin: "0 auto", justifySelf: "center", alignSelf: "center" }}>Bienvenido a nuestra tienda</h1>
        <h2 style={{ fontSize: "18px", fontFamily: "Courier New, sans serif", margin: "0 auto", justifySelf: "center", alignSelf: "center" }}>Contamos con las mejores prendas al mejor precio</h2>
      </div>
      <div className="items-container">
        {
          items.length !== 0 ? (
            items.map(item => (
              <ItemCard className="item-card" item={item} key={item.id} />
            ))
          ) : (
            <p>Cargando...</p>
          )
        }
      </div>
    </div>
  );
}

export default ItemListContainer;