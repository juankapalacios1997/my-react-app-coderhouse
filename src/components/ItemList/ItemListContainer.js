import React from "react";
import './ItemListContainer.css';

function ItemListContainer(props) {
  const { msg } = props;

  return (
    <div className="item-list-container">
      <p className="msg" style={{ fontSize: "48px", fontFamily: "Courier New, sans serif", margin: "0 auto", justifySelf: "center", alignSelf: "center" }}>{ msg }</p>
    </div>
  );
}

export default ItemListContainer;