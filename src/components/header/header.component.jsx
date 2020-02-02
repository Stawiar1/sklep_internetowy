import React from 'react';
import './header.styles.scss'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/image2vector.svg'
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container'to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SKLEP</Link>
            <Link className='option' to='/shop'>KONTAKT</Link>

            {currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>
                WYLOGUJ SIĘ
            </div>
            ) : (
            <Link className='option' to='/signin'>
                LOGOWANIE
            </Link>
            )}

        </div>
    </div>
)

export default Header;