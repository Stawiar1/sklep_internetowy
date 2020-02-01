import React from 'react';
import './styles/homepage.styles.css'
//Komponent strony głównej zawierający 5 sekcji Czapki , Kurtki , Buty , Kobiety , Mężczyzni

const HomePage = () => (
    <div className="homepage">
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>CZAPKI</h1>
                    <span className='subtitle'>KUP TERAZ</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>KURTKI</h1>
                    <span className='subtitle'>KUP TERAZ</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>BUTY</h1>
                    <span className='subtitle'>KUP TERAZ</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>KOBIETY</h1>
                    <span className='subtitle'>KUP TERAZ</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MĘŻCZYŹNI</h1>
                    <span className='subtitle'>KUP TERAZ</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;