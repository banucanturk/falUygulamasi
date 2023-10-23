import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




function Discover() {

    return (
        <div className='discoverContainer'>
            <div className='discoverHeader'>
                <p className="cursive">faladdin</p>
                <FontAwesomeIcon icon={faUser} className="iconUser" style={{ fontSize: '2rem' }} />
            </div>

            <div className="dailyHoroscope">
                <h2>Günlük Astroloji</h2>
            </div>
            <div className='fortunes'>
                <div className="fortuneGroup">
                    <div className="fortuneItem1">
                        Kahve Falı</div>
                    <div className="fortuneItem2">Tarot Falı</div>
                </div>
                <div className="fortuneGroup">
                    <div className="fortuneItem3">Niyetime İç</div>
                    <div className="fortuneItem4">Lamba Cini</div>
                </div>
            </div>
            <div className="dailyHoroscopeLower">
                <h2 className='motivation'>Günlük Motivasyon</h2>
            </div>

            <div className='discoverFooter'>
                <div className='homepage' >
                    <FontAwesomeIcon icon={faHome} style={{ fontSize: '2rem' }} />
                </div>
                <Link to="/gelenkutusu">
                    <div className='inbox'>
                        <FontAwesomeIcon icon={faMessage} className="iconUser" style={{ fontSize: '2rem' }} />
                    </div>
                </Link>


            </div>

        </div>


    );

}

export default Discover;