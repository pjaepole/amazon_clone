import './Header.css'
import amazlogo from '../amazon_PNG11.png'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import aflag from '../americanflag.png'

function Header(){
    return (
        <nav className='header'>
            <Link to='/'>
                <img className='header_logo' alt='amazon-logo'src={amazlogo} />
            </Link>
            <Link to='/login' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_lineone'>Hello</span>
                        <span className='header_option_linetwo'>Select your address</span>
                    </div>
                </Link>
            <div className="header_search">
                <select className='header_select'>
                    <option>All</option>
                </select>
                <input type='text' className="header_search_input" />
                <SearchIcon className="header_search_icon"/>
            </div>

            <div className='header_nav'>
                <Link to='/' className='header_link'>
                    <div className='header_option'>
                        <img alt='flag for language' className='header_flag_icon' src={aflag}></img>
                    </div>
                </Link>
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
                <Link to='/checkout' className='header_link'>
                    <div className='header_option_cart'>
                        <span className='header_option_lineone'>10</span>
                        <ShoppingCartIcon className='header_option_cartlogo'/>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header