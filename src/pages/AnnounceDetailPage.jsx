import { useParams } from 'react-router-dom';
import newsData from '../components/home/news/newsData';
import { useEffect } from 'react';
function AnnounceDetailPage(){
    useEffect(() => {
        window.scroll(0,0)
    },[])
    let { id } = useParams();
    const newsItem = newsData.find(section => section.type === "ELANLAR").items.find(item => item.id === parseInt(id));
    return(
            
        <div className='announce-detail'>
            <h2>Elan haqda məlumat</h2>

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

export default AnnounceDetailPage;