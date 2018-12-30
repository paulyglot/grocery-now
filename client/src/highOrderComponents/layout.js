import React, { Component } from 'react';

import Header from '../components/Head_Foot/Header';
import Footer from '../components/Head_Foot/Footer';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="page_container">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Layout;