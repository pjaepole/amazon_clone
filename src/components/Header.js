import './Header.css'
import amazlogo from '../amazon_PNG11.png'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
function Header(){
    return (
        <nav className='header'>
            <Link to='/'>
                <img className='header_logo' alt='amazon-logo'src={amazlogo} />
            </Link>
            <div className="header_search">
                <input type='text' className="header_search_input" />
                <SearchIcon className="header_search_icon"/>
            </div>

            <div className='header_nav'>
                <Link to='/login' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_lineone'>Hello, Sign in</span>
                        <span className='header_option_linetwo'>Account & Lists</span>
                    </div>
                </Link>
                <Link to='/' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_lineone'>Returns</span>
                        <span className='header_option_linetwo'>& Orders</span>
                    </div>
                </Link>
                <Link to='/' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_lineone'>Returns</span>
                        <span className='header_option_linetwo'>& Orders</span>
                    </div>
                </Link>
                <Link to='/checkout' className='header_link'>
                    <div className='header_option_cart'>
                        <ShoppingCartIcon/>
                        <span className='header_option_lineone'>0</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header