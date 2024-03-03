import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import eventData from "../components/home/events/eventData";
import './detail.scss'
function EventsDetailPage() {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    let { id } = useParams();
    // Veriyi etkinlik kimliğine göre filtrele
    const event = eventData.flatMap(section => section.data).find(event => event.id === parseInt(id));

    // Etkinlik verisi bulunamadıysa
    if (!event) {
        return <p>Etkinlik bulunamadı</p>;
    }

    // Etkinlik verisi bulunduysa
    return (
        <div className="event-detail">
            <h2>{event.text}</h2>
            <p>Tarih: {event.date}</p>
            <img src={event.imgSrc} alt="Event" />
            <p>{event.text}</p>
        </div>
    )
}

export default EventsDetailPage;
