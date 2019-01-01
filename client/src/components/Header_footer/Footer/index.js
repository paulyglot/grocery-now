import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';


const Footer = () => {
    return (
        <footer className="bck_b_dark">
            <div className="container">
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
                                    <div>555 San Juan Dr</div>
                                    <div>Sunnyvale, CA</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Phone</div>
                                    <div>(408) 368-3605</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faClock}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Working hours</div>
                                    <div>Mon-Fri/ 8am-12am (dev hours)</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Email</div>
                                    <div>pabrower@icloud.com</div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="left">
                        <h2>Get to know me</h2>
                        <div>
                            <div>
                            If you like this pseudo e-commerce app, then checkout my github profile for more:
                            </div>
                            <div>
                            https://github.com/paulyglot
                            </div>
                            <br></br>
                            <div>
                             I am available for hire, please reach out to me at the email or phone number provided on the left 
                            </div>
                            <br></br>
                            <div>
                            If you'd like to get my resume, please visit my LinkedIn:
                            </div>
                            <div>
                            https://www.linkedin.com/in/paul-brower
                            </div>
                            <br></br>
                            <div>
                            HACK THE PLANET!!!
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
        </footer>
    );
};

export default Footer;