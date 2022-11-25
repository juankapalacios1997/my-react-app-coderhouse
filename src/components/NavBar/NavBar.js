import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar() {
        return (
        <div className="nav-container">
            <nav className="nav-bar">
            <button className="button"><a href='#'>Blusas</a></button>|
            <button className="button"><a href='#'>Camisas</a></button>|
            <button className="button"><a href='#'>Camisetas</a></button>|
            <button className="button"><a href='#'>Vestidos</a></button>|
            <button className="button"><a href='#'>Pantalones</a></button>|
            <button className="button"><a href='#'>Calzado</a></button>
            </nav>
            <CartWidget className="cart-widget"/>
        </div>
        )
}

export default NavBar;