import './Header.css';
import logo from '../../images/logo.png';
import cart from '../../images/cart.svg';
import { Button } from '../Button/Button';

export const Header = () => {
    return (
        <header className="header">
            <nav className="header_content wrapper">
                <a href="#" className="header_logo">
                    <img src={logo} alt="logo" width="180"/>
                </a>

                <div className="plug"></div>

                <ul className='header_links'>
                    <li><a className='header_links_item selected' href="#">Home</a></li>
                    <li><a className='header_links_item' href="#">About</a></li>
                    <li><a className='header_links_item' href="#">Team</a></li>
                    <li><a className='header_links_item' href="#">Shop</a></li>
                    <li><a className='header_links_item' href="#">Pages</a></li>
                </ul>

                <div className="plug"></div>

                <a href="#" className="header_cart">
                    <img src={cart} alt="cart" width="32" height="32"/>
                    <div className="header_cart_mark">0</div>
                </a>

                <Button text={'Contact Us'} type={'contour'} />
            </nav>
        </header>
    );
};
