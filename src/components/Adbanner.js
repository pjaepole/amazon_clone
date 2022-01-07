import adbannerpicture from '../assets/misc_pic/amazonreloadad.png'
import './Adbanner.css'
function Adbanner(){
    return(
        <div >
            <img className='adbanner_img' alt='ad banner' src={adbannerpicture}></img>
        </div>
    )
}

export default Adbanner