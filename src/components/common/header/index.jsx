import{ useState } from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from './menuItems'; 
import './styles.scss'; 

// Other image imports
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
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleSubmenu = (index) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    return (
        <div className="header">
            <div className='header-main'>
                <div className="home-icon">
                    <img src={homeIcn} alt="" />
                </div>

                <ul className={`links ${isMenuOpen ? 'show-links active' : ''}`}>
                    {menuItems.map((menu, index) => (
                        <li key={index}>
                            <Link className='link' onClick={() => toggleSubmenu(index)}>
                                {menu.title}
                                <img src={arrowDown} alt="" />
                            </Link>
                            <div className={`link-children ${openSubmenu === index ? 'show' : ''}`}>
                                {menu.subMenu.map((subItem, subIndex) => (
                                    <Link key={subIndex}>{subItem.title}</Link>
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
                    <img src={searchIcn} alt="" />
                    <input type="text" placeholder='AXTAR' />
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
        </div>
    );
}

export default Header;
