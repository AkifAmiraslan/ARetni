/* eslint-disable react/no-unescaped-entities */

import sliderImg from '../../../assets/images/slider-image.png';
import './styles.scss'
import Cart from './cart';
import NewsImg from '../../../assets/images/news-thumb.png'
import newsData from './newsData';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


// import required modules
import { Navigation, Pagination, Autoplay} from 'swiper/modules';



function News() {
    
    
    return (
        <div className='news-container'>
            <div className="news-slider">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='slider'>
                            <img src={sliderImg} alt="" />
                            <p>
                                "Beynəlxaq nəqliyyat-logistika dəhlizi: Zəngilandan inkişaf impulsları" 
                                mövzusunda konfransın ikinci günü Bakıda keçirilib.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>                        
                        <div className='slider'>
                            <img src={sliderImg} alt="" />
                            <p>
                                "Beynəlxaq nəqliyyat-logistika dəhlizi: Zəngilandan inkişaf impulsları" 
                                mövzusunda konfransın ikinci günü Bakıda keçirilib.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>                        
                        <div className='slider'>
                            <img src={sliderImg} alt="" />
                            <p>
                                "Beynəlxaq nəqliyyat-logistika dəhlizi: Zəngilandan inkişaf impulsları" 
                                mövzusunda konfransın ikinci günü Bakıda keçirilib.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>                
                        <div className='slider'>
                            <img src={sliderImg} alt="" />
                            <p>
                                "Beynəlxaq nəqliyyat-logistika dəhlizi: Zəngilandan inkişaf impulsları" 
                                mövzusunda konfransın ikinci günü Bakıda keçirilib.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>                      
                        <div className='slider'>
                            <img src={sliderImg} alt="" />
                            <p>
                                "Beynəlxaq nəqliyyat-logistika dəhlizi: Zəngilandan inkişaf impulsları" 
                                mövzusunda konfransın ikinci günü Bakıda keçirilib.
                            </p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='news-announcements'>
                {newsData.map((section, index) => (
                    <section key={index} className={section.type === "XƏBƏRLƏR" ? 'news' : 'announcements'}>
                        <h2>{section.type}</h2>
                        <div className='carts'>
                            {section.items.map((item, itemIndex) => (
                                <Cart
                                    key={itemIndex}
                                    imgSrc={NewsImg}
                                    text={item.text}
                                    eyeCount={item.eyeCount}
                                    date={item.date}
                                    id={item.id}
                                    type={section.type}
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
        
    );
}

export default News;
