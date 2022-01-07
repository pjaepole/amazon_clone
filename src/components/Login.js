import {Link } from 'react-router-dom'
import amazonlogo from '../amazon_PNG11.png'
function Login(){
    return (
        <div className='login'>
            This is Login
            <Link to='/'>
                <img alt='amazon logo' src={amazonlogo}></img>
            </Link>
        </div>
    )
}

export default Login