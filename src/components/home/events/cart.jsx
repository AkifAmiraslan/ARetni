// cart.jsx

import photoCam from '../../../assets/images/photo-cam.png';
import videoCam from '../../../assets/images/video-cam.png';

function Cart(props) {
    // eslint-disable-next-line react/prop-types
    const { isPhotoCam, imgSrc, text, date } = props;
    
    return (
        <div className="cart">
            <div className="img">
                <img src={isPhotoCam ? photoCam : videoCam} className='cam' alt="" />
                <img src={imgSrc} alt="" />
                <p className='date'>{date}</p>
            </div>
            <div className="text">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Cart;
