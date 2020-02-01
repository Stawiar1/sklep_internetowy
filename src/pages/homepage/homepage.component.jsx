import React from 'react';
import Directory from '../../components/directory/directory.component'

import './homepage.styles.scss'
//Komponent strony głównej zawierający 5 sekcji Czapki , Kurtki , Buty , Kobiety , Mężczyzni

const HomePage = () => (
    <div className="homepage">
       <Directory />
    </div>
)

export default HomePage;