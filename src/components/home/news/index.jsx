/* eslint-disable react/no-unescaped-entities */

import sliderImg from '../../../assets/images/slider-image.png';
import './styles.scss'
import Cart from './cart';
import NewsImg from '../../../assets/images/news-thumb.png'
// import newsData from './newsData';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


// import required modules
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import { useState, useEffect } from 'react';
import axios from 'axios';


function News() {
    const [articles, setArticles] = useState([]);
    const [showAll, setShowAll] = useState(false);
  
    useEffect(() => {
      axios.get('https://alphaomega.az/api/pages')
        .then(response => {
          setArticles(response.data);
        })
        .catch(error => {
          console.error('Məlumatlar alınarkən səhv:', error);
        });
    }, []);
  
    // İlk 5 məlumatı götürmək
    const firstFiveArticles = articles.slice(0, 5);
  
    // Bütün məlumatları göstərmək üçün funksiya
    const handleShowAll = () => {
      setShowAll(true);
    };
    
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
                    {articles.length > 0 ? (
                        articles.map((article, index) => (
                            <SwiperSlide key={index}>
                                <div className='slider'>
                                    <img src={sliderImg} alt="" />
                                    <p>
                                        {article.title_az}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))
                        ) : (
                            <li>Yüklənir...</li>
                    )}
                    

                </Swiper>
            </div>
            <div className='news-announcements'>
                <h2>XƏBƏRLƏR</h2>
                <div className='carts'>
                    {showAll
                    ? articles.map((article, index) => (
                        <Cart
                            key={index}
                            imgSrc={NewsImg}
                            text={article.title_az}
                            eyeCount={123}
                            date="17.12.23"
                            id={article.id}
                            type={article.type}
                        />
                        ))
                    : firstFiveArticles.map((article, index) => (
                        <Cart
                            key={index}
                            imgSrc={NewsImg}
                            text={article.title_az}
                            eyeCount={123}
                            date="17.12.23"
                            id={article.id}
                            type={article.type}
                        />
                        ))}
                </div>
                    {!showAll && articles.length > 5 && (
                        <button onClick={handleShowAll} className='openNews'>...</button>
                    )}
                </div>
        </div>
        
    );
}

export default News;
