import { useParams } from 'react-router-dom';
import newsData from '../components/home/news/newsData';
import { useEffect } from 'react';
import './detail.scss'
function NewsDetailPage(){
    useEffect(() => {
        window.scroll(0,0)
    },[])
    let { id } = useParams();
    const newsItem = newsData.flatMap(section => section.items).find(item => item.id === parseInt(id));
    return(
            
        <div className='news-detail'>
            <h2>Xəbər haqda məlumat</h2>

            {newsItem ? (
                <div>
                    <h3>{newsItem.text}</h3>
                    <p>{newsItem.text}</p>
                </div>
            ) : (
                <p>Xəbər tapılmadı</p>
            )}
        </div>
        
    )
}

export default NewsDetailPage;