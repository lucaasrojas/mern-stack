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
                    gridTemplateRows: '10vh auto 12vh',
                    height: '100vh'
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
                        gridRow: '3'
                    }}
                />
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'))