import './Header.css'
import amazlogo from '../amazon_PNG11.png'
import { Link } from 'react-router-dom'
function Header(){
    return (
        <nav className='header'>
            <Link to='/'>
                <img className='header_logo' alt='amazon-logo'src={amazlogo} />
            </Link>
        </nav>
    )
}

export default Header