import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function AnnounceDetailPage(){
    const [article, setArticle] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get('https://alphaomega.az/api/pages')
        .then(response => {
            const data = response.data;
            // Verilerin içinde gezinerek, belirtilen id'ye sahip olan makaleyi buluyoruz
            const foundArticle = data.find(item => item.id === parseInt(id));
            if (foundArticle) {
                setArticle(foundArticle);
            } else {
                console.error('Məlumat tapılmadı');
            }
        })
        .catch(error => {
            console.error('Məlumatlar alınarkən səhv:', error);
        });
        window.scroll(0,0);
    }, [id]);

    return(
        <div className='announce-detail'>
            {article ? (
                <div>
                    <h2>{article.title_az}</h2>
                    <p>{article.content_az}</p>
                </div>
            ) : (
                <p>Məlumat tapılmadı</p>
            )}
        </div>
    )
}

export default AnnounceDetailPage;
