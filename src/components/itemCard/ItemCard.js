import { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from '../Context/Context';
import "./ItemCard.css";

function ItemCard(props) {
    const { item } = props;
    const { dispatch } = useContext(Context);
    const [stock, setStock] = useEffect(item.amount);

    const onClickAddToCartHandler = () => {
        setStock(stock - 1);
        dispatch({
          type: "ADD-TO-CART",
          payload: {
            id: item.id,
            name: item.name,
            price: item.price,
            category: item.category
            },
        });
    };

    return (
        <div className="item-card">
            <h1><NavLink to={`/items/${item.id}`}>{item.name}</NavLink></h1>
            <img src={item.img} alt={item.name} />
            <p>${item.price}</p>
            <p>En stock: <span className={stock > 0 ? 'stock' : 'no-stock'}>{stock}</span></p>
            <button className="add-to-cart" onClick={onClickAddToCartHandler} disabled={stock > 0 ? false : true}>Add to car</button>
        </div>
    )
};

export default ItemCard;