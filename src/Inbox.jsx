import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Inbox() {

    return (

        <div className="discoverContainer">
            <div className='discoverHeader'>
                <p className="cursive">Gelen Kutusu</p>
                <FontAwesomeIcon icon={faUser} className="iconUser" style={{ fontSize: '1.7rem' }} />
            </div>
            <div className="discoverFooter">
                <Link to={"/anasayfa"}>
                    <div className="homepage" >
                        <FontAwesomeIcon icon={faHome} style={{ fontSize: '1.7rem' }} />
                    </div>
                </Link>

                <Link to="/gelenkutusu">
                    <div className="inbox">
                        <FontAwesomeIcon icon={faMessage} className="iconUser" style={{ fontSize: '1.7rem' }} />
                    </div>
                </Link>
            </div>



        </div>

    );

}

export default Inbox;