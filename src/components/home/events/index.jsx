// events.jsx

import Cart from './cart';
import journalImg from '../../../assets/images/sidebar-journal-image.png';
import './styles.scss';
import eventData from './eventData';
import { Link } from 'react-router-dom';
function Events() {


    return (
        <div className="common-container">
            <div className="section-1">
                {eventData.map((section, index) => (
                    <div key={index} className="events">
                        <h2 className="title">{section.title}</h2>
                        <div className="carts-container">
                          
                                {section.data.map((event, eventIndex) => (
                                    <Link key={eventIndex} to={`/events/${event.id}`}>
                                        <Cart key={eventIndex} {...event} />
                                    </Link>
                                    
                            ))}
                           
                            
                        </div>
                    </div>
                ))}
            </div>
            <div className="section-2">
                <h2 className="title">MƏLUMATLAR</h2>
                <div className="information">
                    <div className="journal">
                        <img src={journalImg} alt="" />
                        <h2>“İQTİSADİ ARTIM VƏ İCTİMAİ RİFAH” JURNALI</h2>
                    </div>
                    <div className="btns">
                        <button className="eco-index">İQTISADİYYATIN SOLLUĞU (SAĞLIĞI) İNDEKSİ - 2017</button>
                        <button className="life-index">HƏYAT KEYFİYYƏTİ İNDEKSİ</button>
                        <button className="oil-price">NEFTİN QİYMƏTLƏRİ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
