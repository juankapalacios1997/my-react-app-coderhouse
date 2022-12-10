import "./ItemCard.css";

function ItemCard(props) {
    const { children } = props;

    return (
        <div className="item-card">
            { children }
        </div>
    )
};

export default ItemCard;