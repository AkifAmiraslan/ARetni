import book1 from '../../../assets/images/book1.png'
import book2 from '../../../assets/images/book2.png'
import book3 from '../../../assets/images/book3.png'
import book4 from '../../../assets/images/book4.png'
import ilhamLogo from '../../../assets/images/ilham-logo.png'
import mehribanLogo from '../../../assets/images/mehriban-logo.png'
import haFondLogo from '../../../assets/images/ha-foundation-logo.png'
import ameaLogo from '../../../assets/images/amea-logo.png'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './styles.scss'

// import required modules
import { Navigation, Autoplay} from 'swiper/modules';
import './styles.scss'
function Libraries(){
    return(
        <div className="libraries-container">
            <h2 className='title'>
                KITABXANA
            </h2>
            <div className='slider-1'>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        0:{
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide><img src={book1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={book2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={book3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={book4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={book1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={book2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={book3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={book4} alt="" /></SwiperSlide>
                
                </Swiper>
            </div>
            <div className='slider-2'>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        0:{
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide><img src={ilhamLogo} alt="" /></SwiperSlide>
                <SwiperSlide><img src={mehribanLogo} alt="" /></SwiperSlide>
                <SwiperSlide><img src={haFondLogo} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ameaLogo} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ilhamLogo} alt="" /></SwiperSlide>
                <SwiperSlide><img src={mehribanLogo} alt="" /></SwiperSlide>
                <SwiperSlide><img src={haFondLogo} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ameaLogo} alt="" /></SwiperSlide>
                
                </Swiper>
            </div>
        </div>
    )
}
export default Libraries;