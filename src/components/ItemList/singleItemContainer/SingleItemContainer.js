import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import ProductList from "../ProductList/ProductList";
import { getItem } from "../../../services/getItems";
import ItemCard from "../../itemCard/ItemCard";
import '../ItemListContainer.css';

function SingleItemContainer() {
  const [person, setPerson] = useState('')
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  console.log(itemId);

  useEffect(() => {
    getItem(itemId).then((itemData) => {
      console.log(itemData);
      setItem(itemData)
    });
    setPerson('Juan Carlos')
  }, [itemId]);

  const handleChange = (event) => {
    const name = event.target.value;
    setPerson(name);
  }

  return (
    <div className="item-list-container">
      <div className="greeting-container">
        <p className="msg" style={{ fontSize: "48px", fontFamily: "Courier New, sans serif", margin: "0 auto", justifySelf: "center", alignSelf: "center" }}>Bienvenido, <span>{person}</span></p>
        <input className="person-input" type="text" onChange={handleChange} placeholder="Enter the person name" ></input>
      </div>
      <div className="items-container">
        <ItemCard className="item-card">
            <h1>{item.name}</h1>
            <img src={item.img} alt={item.name}/>
            <p>{item.price}</p>
            <p>{item.category}</p>
        </ItemCard>
      </div>
    </div>
  );
};

export default SingleItemContainer;