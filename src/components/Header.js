import React from 'react'

import Footer from './Footer'
import logo from '../assets/images/logo.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="https://www.associationardevaz.org" className="image avatar"><img src={logo} alt="Association Ardévaz
                    " /></a>
                    <h1><strong>Association Ardévaz</strong></h1>
                    <h3><em>Nous n’étudions pas pour l’école, mais pour la vie ! </em></h3>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
