/* eslint-disable react/prop-types */
import './styles.scss'
import eyeIcn from '../../../assets/images/eye-icon.png'
import { Link } from 'react-router-dom';
function Cart(props){
    const destination = props.type === 'XƏBƏRLƏR' ? 'news' : 'announcements';
    return(
        <div className="cart">
            <Link to={`/${destination}/${props.id}`}>
                <div className="img">
                    <img src={props.imgSrc} alt="" />
                </div>

                <div className='about'>
                    <p className='text'>
                        {props.text}
                    </p>

                    <div className="additions">
                        <div className='eye-count'>
                            <img src={eyeIcn} alt="eyeIcn" />
                            <p>{props.eyeCount}</p>
                        </div>
                        <div className='date'>
                            {props.date}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Cart;