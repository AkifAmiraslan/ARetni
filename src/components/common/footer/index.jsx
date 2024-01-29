import './styles.scss'
import logo from '../../../assets/images/logo-center.png'
import emailIcn from '../../../assets/images/email-icon.png'
import { Link } from 'react-router-dom';
function Footer(){
    return(
        <div className="footer">
            <section>
                <Link to="about">Haqqımızda</Link>
                <Link to="structure">Struktur</Link>
                <Link to="coordination">Koordinasiya şurası</Link>
                <Link to="dissertation">Dissertasiya şurası</Link>
                <Link to="scientist">Elmi hesabatlar</Link>
                <Link to='countryPrograms'>Dövlət proqramları</Link>
            </section>
            <div className='line'></div>
            <section>
                <Link to='tasks'>Əsərlər</Link>
                <Link to="books">Kitablar</Link>
                <Link to="journals">Jurnallar</Link>
                <Link to='conferances'>Konfranslar</Link>
                <Link to='events'>Tədbirlər</Link>
                <Link to='grants'>Qrantlar</Link>
            </section>
            <div className='line'></div>
            <section className='mid-child'>
                <img src={logo} className='logo' alt="" />
                
                    <h1>
                        Azərbaycan Respublikası Elm və Təhsil Nazirliyi 
                        <span>İqtisadiyyat İnstitutu</span>
                    </h1>
                    
                    <div className='mail'>
                        <img src={emailIcn} alt="" />
                        <a href="">info@economics.com.az</a>
                    </div>

                
            </section>
            <div className='line'></div>
            <section>
                <a href="">science.gov.az</a>
                <a href="">azerbaijan.az</a>
                <a href="">heydar-aliyev.org</a>
                <a href="">president.az</a>
                <a href="">edu.gov.az</a>
                <a href="">science.gov.az</a>
            </section>
            <div className='line'></div>
            <section>
                <p className='address'>
                    Ünvan: 
                    Bakı şəhəri,
                    AZ1143,  
                    H.Cavid pr., 115
                </p>
                <p className='phone-number'>
                    Telefon:
                    (+994 12) 510 37 92
                </p>
            </section>
        </div>
    )
}
export default Footer;