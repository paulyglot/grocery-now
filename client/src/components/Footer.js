import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';

const Footer = () => {
    return (
        <footer className="bck_b_dark">
            <div className="wrapper">
                <div className="left">
                    <h2>Contact information</h2>
                    <div className="business_nfo">
                        <div className="tag">
                            <FontAwesomeIcon
                                icon={faCompass}
                                className="icon"
                            />
                            <div className="nfo">
                                <div>Address</div>
                                <div>555 San Juan Dr, Sunnyvale, CA 94085</div>
                            </div>
                        </div>
                        <div className="tag">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="icon"
                            />
                            <div className="nfo">
                                <div>Phone</div>
                                <div>(408) 555-5555</div>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
        </footer>
    );
};

export default Footer;