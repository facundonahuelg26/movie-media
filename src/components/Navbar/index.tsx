import { Link } from 'react-router-dom';
import Input from '../search/Input';
import GenresList from './GenresList';
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Input/>
        <ul className='ul-nav'>
            <li>
                <Link to="/">
                    MovieMedia 
                </Link>
            </li>
            <li className='container-li'>
                <span className='genres-title'>Genres</span>  
                <ul className='nested-ul'>
                    <GenresList/>
                </ul>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;