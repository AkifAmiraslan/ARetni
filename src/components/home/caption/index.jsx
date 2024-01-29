import './styles.scss'
import logo from '../../../assets/images/logo-center.png'
function Caption(){
    return(
        <div className="caption-container">
            <img src={logo} alt="" />
            <p>
                Azərbaycan Respublikası Elm və Təhsil Nazirliyi İqtisadiyyat İnstitutu
            </p>
        </div>
    )
}
export default Caption;