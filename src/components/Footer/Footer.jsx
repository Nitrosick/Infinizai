import './Footer.css';
import logo from '../../images/logo.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_content wrapper">
                <div className="footer_block">
                    <a href="#" className="footer_logo">
                        <img src={logo} alt="logo" width="180"/>
                    </a>
                    <p className="footer_description">
                        Lorem ipsum dolor amet,<br />
                        consectetur adipiscing elit. Eget<br />
                        nisl nunc quam ac sed turpis<br />
                        volutpat. Cursus sed massa non.
                    </p>
                </div>

                <nav className="footer_block">
                    <h3 className="footer_title">Menu Items</h3>
                    <ul>
                        <li><a href="#" className="footer_link footer_description">About</a></li>
                        <li><a href="#" className="footer_link footer_description">Blog</a></li>
                        <li><a href="#" className="footer_link footer_description">Shop</a></li>
                        <li><a href="#" className="footer_link footer_description">Contact Us</a></li>
                    </ul>
                </nav>

                <nav className="footer_block">
                    <h3 className="footer_title">Other Pages</h3>
                    <ul>
                        <li><a href="#" className="footer_link footer_description">Styleguide</a></li>
                        <li><a href="#" className="footer_link footer_description">Changelog</a></li>
                        <li><a href="#" className="footer_link footer_description">Licenses</a></li>
                        <li><a href="#" className="footer_link footer_description">Team</a></li>
                    </ul>
                </nav>

                <div className="footer_block">
                    <h3 className="footer_title">Social Icons</h3>
                    <nav className="footer_social">
                        <a href="#" className="footer_social_icon"></a>
                        <a href="#" className="footer_social_icon"></a>
                        <a href="#" className="footer_social_icon"></a>
                        <a href="#" className="footer_social_icon"></a>
                    </nav>
                </div>

                <div className="footer_copyright">Copyright by 2022 Buni</div>
            </div>
        </footer>
    );
};
