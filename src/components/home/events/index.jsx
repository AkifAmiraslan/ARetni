import Cart from "./cart";
import eventImg1 from '../../../assets/images/block-image.png'
import eventImg2 from '../../../assets/images/block-image (1).png'
import journalImg from '../../../assets/images/sidebar-journal-image.png'
import './styles.scss'
function Events(){
    return(
        <div className="common-container">
            <div className="section-1">

                <div className="events">
                    <h2 className="title">
                        TƏDBİRLƏR
                    </h2>
                    <div className="carts-container">
                        <Cart
                            imgSrc={eventImg1}
                            text='"Sosial müdafiə statistikasına dair 
                            məlumatların toplanması və 
                            yayılması" mövzusunda...'
                            isPhotoCam={true}
                            date="17 noyabr 2023"
                        />
                        <Cart
                            imgSrc={eventImg2}
                            text='İqtisadiyyat İnstitutunun 4 elmi 
                            əməkdaşına ingilis dilində akademik 
                            yazı bacarıqları üzrə sertifikat verilib.'
                            isPhotoCam={false}
                            date="17 noyabr 2023"
                        />
                        <Cart
                            imgSrc={eventImg1}
                            text='"Sosial müdafiə statistikasına dair 
                            məlumatların toplanması və 
                            yayılması" mövzusunda...'
                            isPhotoCam={true}
                            date="17 noyabr 2023"
                        />
                    </div>
                </div>
                
                <div className="conferences">
                    <h2 className="title">
                        KONFRANSLAR
                    </h2>
                    <div className="carts-container">
                        <Cart
                            imgSrc={eventImg1}
                            text='"Sosial müdafiə statistikasına dair 
                            məlumatların toplanması və 
                            yayılması" mövzusunda...'
                            isPhotoCam={true}
                            date="17 noyabr 2023"
                        />
                        <Cart
                            imgSrc={eventImg2}
                            text='İqtisadiyyat İnstitutunun 4 elmi 
                            əməkdaşına ingilis dilində akademik 
                            yazı bacarıqları üzrə sertifikat verilib.'
                            isPhotoCam={false}
                            date="17 noyabr 2023"
                        />
                        <Cart
                            imgSrc={eventImg1}
                            text='"Sosial müdafiə statistikasına dair 
                            məlumatların toplanması və 
                            yayılması" mövzusunda...'
                            isPhotoCam={true}
                            date="17 noyabr 2023"
                        />
                    </div>
                </div>

                <div className="councils">
                    <h2 className="title">
                        ŞURALAR
                    </h2>
                    <div className="carts-container">
                        <Cart
                            imgSrc={eventImg1}
                            text='"Sosial müdafiə statistikasına dair 
                            məlumatların toplanması və 
                            yayılması" mövzusunda...'
                            isPhotoCam={true}
                            date="17 noyabr 2023"
                        />
                        <Cart
                            imgSrc={eventImg2}
                            text='İqtisadiyyat İnstitutunun 4 elmi 
                            əməkdaşına ingilis dilində akademik 
                            yazı bacarıqları üzrə sertifikat verilib.'
                            isPhotoCam={false}
                            date="17 noyabr 2023"
                        />
                        <Cart
                            imgSrc={eventImg1}
                            text='"Sosial müdafiə statistikasına dair 
                            məlumatların toplanması və 
                            yayılması" mövzusunda...'
                            isPhotoCam={true}
                            date="17 noyabr 2023"
                        />
                    </div>
                </div>

            </div>
            <div className="section-2">
                <h2 className="title">
                    MƏLUMATLAR
                </h2>
                <div className="information">

                    <div className="journal">
                        <img src={journalImg} alt="" />
                        <h2>
                            “İQTİSADİ ARTIM VƏ İCTİMAİ RİFAH” JURNALI 
                        </h2>
                    </div>
                    
                    <div className="btns">
                        <button className="eco-index">
                            İQTISADİYYATIN SOLLUĞU (SAĞLIĞI) İNDEKSİ - 2017
                        </button>       

                        <button className="life-index">
                            HƏYAT KEYFİYYƏTİ İNDEKSİ
                        </button>       
                        
                        <button className="oil-price">
                            NEFTİN QİYMƏTLƏRİ
                        </button>
                    </div>
                    

                </div>

            </div>
        </div>
        
    )
}
export default Events;