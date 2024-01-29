/* eslint-disable react/prop-types */
import './styles.scss'
import eyeIcn from '../../../assets/images/eye-icon.png'
function Cart(props){
    return(
        <div className="cart">
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
        </div>
    )
}
export default Cart;