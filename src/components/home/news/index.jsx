import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import sliderImg from '../../../assets/images/slider-image.png';
import './styles.scss'
import Cart from './cart';
import NewsImg from '../../../assets/images/news-thumb.png'
function News() {
    return (
        <div className='news-container'>
            <div className="news-slider">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <img src={sliderImg} alt="" className="slider-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sliderImg} alt="" className="slider-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sliderImg} alt="" className="slider-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sliderImg} alt="" className="slider-image" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='news-announcements'>
                <section className='news'>
                    <h2>
                        XƏBƏRLƏR
                    </h2>
                    <div className='carts'>
                        <Cart
                            imgSrc={NewsImg}
                            text="Beynəlxalq nəqliyyat-logistika 
                            dəhlizi: Zəngilandan inkişaf 
                            impulsları” mövzusunda 
                            beynəlxalq konfrans"
                            eyeCount="123"
                            date="17 noyabr 2023"
                        />
                        <Cart
                            imgSrc={NewsImg}
                            text="Beynəlxalq nəqliyyat-logistika 
                            dəhlizi: Zəngilandan inkişaf 
                            impulsları” mövzusunda 
                            beynəlxalq konfrans"
                            eyeCount="123"
                            date="17 noyabr 2023"
                        />
                        <Cart
                            imgSrc={NewsImg}
                            text="Beynəlxalq nəqliyyat-logistika 
                            dəhlizi: Zəngilandan inkişaf 
                            impulsları” mövzusunda 
                            beynəlxalq konfrans"
                            eyeCount="123"
                            date="17 noyabr 2023"
                        />
                    </div>
                </section>
                <section className='announcements'>
                    <h2>
                        ELANLAR
                    </h2>
                    <div className='carts'>
                        <Cart
                            imgSrc={NewsImg}
                            text="İqtisadiyyat İnstitutunun əsas
                            fənləri üzrə fəlsəfə doktoru 
                            imtahanları qış sessiyası
                            təşkil olunacaq."
                            eyeCount="123"
                            date="17 noyabr 2023"
                        />
                        <Cart
                            imgSrc={NewsImg}
                            text="İqtisadiyyat İnstitutunun əsas
                            fənləri üzrə fəlsəfə doktoru 
                            imtahanları qış sessiyası
                            təşkil olunacaq."
                            eyeCount="123"
                            date="17 noyabr 2023"
                        />
                        <Cart
                            imgSrc={NewsImg}
                            text="İqtisadiyyat İnstitutunun əsas
                            fənləri üzrə fəlsəfə doktoru 
                            imtahanları qış sessiyası
                            təşkil olunacaq."
                            eyeCount="123"
                            date="17 noyabr 2023"
                        />
                    </div>
                </section>
            </div>
        </div>
        
    );
}

export default News;
