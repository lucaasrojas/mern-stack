import React, { Component } from 'react';
import { render } from 'react-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainPage from './components/MainPage'

import './styles/general.scss'

class App extends Component {
    render() {
        return (
            <div
                style={{
                    display: 'grid',
                    gridTemplateRows: '10vh auto 15vh',
                    height: '100vh',
                    width: '100vw'
                }}
            >
                <Navbar
                    style={{
                        gridRow: '1'
                    }}
                />
                <MainPage />
                <Footer
                    style={{
                        gridRow: '3',
                        display: 'grid',
                        gridTemplateColumns: 'auto minmax(785px,1170px) auto'
                    }}
                />
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'))