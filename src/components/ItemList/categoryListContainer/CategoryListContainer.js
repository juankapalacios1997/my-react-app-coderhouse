import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
// import ProductList from "../ProductList/ProductList";
import { getItemsByCategory } from "../../../services/getItems";
import ItemCard from "../../itemCard/ItemCard";
import '../ItemListContainer.css';

function CategoryListContainer() {
  const [person, setPerson] = useState('...');
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  console.log(categoryId);

  useEffect(() => {
    getItemsByCategory(categoryId).then((itemsData) => {
      console.log(itemsData);
      setItems(itemsData)
    });
    setPerson("Juan Carlos");
  }, [categoryId]);

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
        {
          items.map(item => (
            <ItemCard className="item-card" key={item.id}>
              <h1><NavLink to={`/items/${item.id}`}>{item.name}</NavLink></h1>
              <img src={item.img}  alt={item.name}/>
              <p>{item.price}</p>
              <p>{item.category}</p>
            </ItemCard>
          ))
        }
      </div>
    </div>
  );
}

export default CategoryListContainer;