import { Button } from '../Button/Button';
import './NavMenu.css';

export const NavMenu = ({ visible, switcher }) => {
    return (
        <nav className={`nav_menu ${visible ? '' : ' hidden'}`}>
            <ul className='nav_menu_links'>
                <li><a className='nav_menu_links_item selected' href="#">Home</a></li>
                <li><a className='nav_menu_links_item' href="#">About</a></li>
                <li><a className='nav_menu_links_item' href="#">Team</a></li>
                <li><a className='nav_menu_links_item' href="#">Shop</a></li>
                <li><a className='nav_menu_links_item' href="#">Pages</a></li>
            </ul>

            <Button text={'Contact Us'} type={'contour'} />

            <button
                className="nav_menu_close"
                onClick={() => {switcher(false)}}
            >
                X
            </button>
        </nav>
    );
};
