import { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from './menuItems'; 
import './styles.scss'; 

// Other image imports
import logo from '../../../assets/images/logo-center.png'
import homeIcn from '../../../assets/images/home-icon.png';
import arrowDown from '../../../assets/images/downArrow-icon.svg';
import facebookIcn from '../../../assets/images/facebook-icon.png';
import instagramIcn from '../../../assets/images/instagram-icon.png';
import youTubeIcn from '../../../assets/images/youtube-icon.png';
import searchIcn from '../../../assets/images/search-icon.png';
import hamburgerMenu from '../../../assets/images/134216_menu_lines_hamburger_icon.svg';
import closeMenu from '../../../assets/images/211651_close_round_icon.svg';

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const toggleSearch = () => {
        setSearchOpen(!isSearchOpen)
    }


    return (
        <div className="header">
            <div className='header-main'>
                <div className="home-icon">
                    <Link to="/">
                        <img src={homeIcn} alt="" />
                    </Link>
                    
                </div>

                <ul className={`links ${isMenuOpen ? 'show-links active' : ''}`}>
                    {menuItems.map((menu, index) => (
                        <li key={index}>
                            <Link className='link'>
                                {menu.title}
                                <img src={arrowDown} alt="" />
                            </Link>

                            <div className='link-children'>
                                {menu.subMenu.map((subItem, subIndex) => (
                                    <div key={subIndex} className='subLinks'>
                                        <Link className='title'>{subItem.title}</Link>
                                        <Link className='small-title'>{subItem.paragraph}</Link> {/* Paragraf içeriğini burada göstermek isterseniz */}
                                    </div>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>

                <div className='social-medias'>
                    <img src={facebookIcn} alt="" />
                    <img src={instagramIcn} alt="" />
                    <img src={youTubeIcn} alt="" />
                </div>

                <div className='search'>
                    <img src={searchIcn} onClick={toggleSearch} alt="" />
                    <input
                        className={`search-input ${isSearchOpen ? 'open' : ''}`}
                        type="search"
                        placeholder='AXTAR'
                    />
                </div>

                <div className='languages'>
                    <p className='en'>
                        EN <span className="underline"></span>
                    </p>
                    <p className='ru'>
                        RU <span className="underline"></span>
                    </p>
                </div>
            </div>

            <div className='menu'>
                {isMenuOpen ? (
                    <img src={closeMenu} alt="close-menu" onClick={toggleMenu}/>
                ) : (
                    <img src={hamburgerMenu} alt="" onClick={toggleMenu} />
                )}
            </div>
            <div className="caption-container">
                <img src={logo} alt="" />
                <p>
                    Azərbaycan Respublikası Elm və Təhsil Nazirliyi İqtisadiyyat İnstitutu
                </p>
            </div>
        </div>
    );
}

export default Header;
