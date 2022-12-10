import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar() {
        const camisas = 'camisas';
        const pantalones = 'pantalones';
        const zapatos = 'zapatos';

        return (
        <div className="nav-container">
            <ul className="nav-bar">
                <li className="nav-link"><NavLink to={'/'}>Inicio</NavLink></li>|
                <li className="nav-link"><NavLink to={`/categories/${camisas}`}>Camisas</NavLink></li>|
                <li className="nav-link"><NavLink to={`/categories/${pantalones}`}>Pantalones</NavLink></li>|
                <li className="nav-link"><NavLink to={`/categories/${zapatos}`}>Calzado</NavLink></li>
            </ul>
            <CartWidget className="cart-widget"/>
        </div>
        )
}

export default NavBar;