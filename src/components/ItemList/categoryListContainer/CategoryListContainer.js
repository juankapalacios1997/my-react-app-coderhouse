import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getItemsByCategory } from "../../../services/getItems";
import { db } from '../../../firebase/config';
import { query, where, collection, getDocs } from 'firebase/firestore';
import ItemCard from "../../itemCard/ItemCard";
import '../ItemListContainer.css';

function CategoryListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  console.log(categoryId);

  const itemsRef = collection(db, 'items');
  const q = query (itemsRef, where('category', '==', categoryId))

  useEffect(() => {
    getDocs(q)
    .then((querySnapshot) => {
      const itemsList = [];
      querySnapshot.forEach((item) => {
        console.log(item.data())
        itemsList.push({...item.data(), id: item.id});
      })
      console.log(itemsList)
      setItems(itemsList)
    })
  }, [q]);

  return (
    <div className="item-list-container">
      <div className="greeting-container">
        <h1 className="msg" style={{ fontSize: "32px", fontFamily: "Courier New, sans serif", margin: "0 auto", justifySelf: "center", alignSelf: "center" }}>Usted se encuentra en la categoría <span>{categoryId}</span></h1>
        <h2 style={{ fontSize: "18px", fontFamily: "Courier New, sans serif", margin: "0 auto", justifySelf: "center", alignSelf: "center" }}>Productos disponibles:</h2>
      </div>
      <div className="items-container">
        {
          items.length !== 0 ? 
          (
            items.map(item => (
              <ItemCard className="item-card" key={item.id}>
                <h1><NavLink to={`/items/${item.id}`}>{item.name}</NavLink></h1>
                <img src={item.img}  alt={item.name}/>
                <p>${item.price}</p>
                <p>En stock: <span className={item.amount !== 0 ? 'stock' : 'no-stock'}>{item.amount}</span></p>
                <button>Add to car</button>
              </ItemCard>
            ))
          ) : (
            <p>Cargando...</p>
          )
        }
      </div>
    </div>
  );
}

export default CategoryListContainer;