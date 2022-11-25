import './CartWidget.css';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget() {
    return(
    <div className="cart-widget">
      <button type="button" id="cart" className="cart-icon" name="cart" value=""><a href="#"><FaShoppingCart className="icon"/><span className="label">Añadir al carrito</span></a></button>
    </div>

    )
}

export default CartWidget;