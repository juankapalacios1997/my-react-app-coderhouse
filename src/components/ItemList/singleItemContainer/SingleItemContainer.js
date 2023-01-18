import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import ProductList from "../ProductList/ProductList";
// import { getItem } from "../../../services/getItems";
import ItemCard from "../../itemCard/ItemCard";
import { db } from '../../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import '../ItemListContainer.css';

function SingleItemContainer() {
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  const itemRef = doc(db, 'items', itemId);

  useEffect(() => {
    getDoc(itemRef)
    .then((snapshot=> {
      if(snapshot.exists()) {
        setItem(({...snapshot.data(), id:snapshot.id}))
      }
    }))
  }, []);

  return (
    <div className="item-list-container">
      <div className="greeting-container">
        <h1 className="msg" style={{ fontSize: "32px", fontFamily: "Courier New, sans serif", margin: "0 auto", justifySelf: "center", alignSelf: "center" }}>Producto seleccionado</h1>
        <h2 style={{ fontSize: "18px", fontFamily: "Courier New, sans serif", margin: "0 auto", justifySelf: "center", alignSelf: "center" }}>Favor de verificar existencia</h2>
      </div>
      <div className="items-container">
        <ItemCard className="item-card">
            <h1>{item.name}</h1>
            <img src={item.img} alt={item.name}/>
            <p>{item.price}</p>
            <p>En stock: <span className={item.amount !== 0 ? 'stock' : 'no-stock'}>{item.amount}</span></p>
            <button>Add to car</button>
        </ItemCard>
      </div>
    </div>
  );
};

export default SingleItemContainer;