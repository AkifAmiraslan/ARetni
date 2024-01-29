/* eslint-disable react/prop-types */
import photoCam from '../../../assets/images/photo-cam.png'
import videoCam from '../../../assets/images/video-cam.png'
function Cart(props){
    const { isPhotoCam } = props;
    
    return(
        <div className="cart">
            <div className="img">
                {
                    isPhotoCam?(
                        <img src={photoCam} className='cam' alt="" />
                    ):(
                        <img src={videoCam} className='cam' alt="" />
                    )
                }
                <img src={props.imgSrc} alt="" />
                <p className='date'>
                    {props.date}
                </p>
            </div>
            <div className="text">
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    )
}
export default Cart;