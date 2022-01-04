import amazlogo from '../amazon_PNG11.png'
import './Header.css'
function Header(){
    return (
        <nav className='header'>
            <img className='header_logo' alt='amazon-logo'src={amazlogo} />
        </nav>
    )
}

export default Header