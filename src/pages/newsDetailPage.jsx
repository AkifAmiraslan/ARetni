import { useParams } from 'react-router-dom';
import newsData from '../components/home/news/newsData';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './detail.scss'
function NewsDetailPage(){
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios.get('https://alphaomega.az/api/pages')
        .then(response => {
          setArticles(response.data);
        })
        .catch(error => {
          console.error('Məlumatlar alınarkən səhv:', error);
        });
        window.scroll(0,0)
    },[])
    let { id } = useParams();
    const newsItem = articles.flatMap(section => section.items).find(item => item.id === parseInt(id));
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