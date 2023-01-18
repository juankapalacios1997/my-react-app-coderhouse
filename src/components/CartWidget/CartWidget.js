import { NavLink } from 'react-router-dom';
import './CartWidget.css';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget() {
    return(
    <div className="cart-widget">
      <button type="button" id="cart" className="cart-icon" name="cart" value=""><span className="label"><NavLink to={'/cart'}><FaShoppingCart className="icon"/>Tu carrito</NavLink></span></button>
    </div>

    )
}

export default CartWidget;