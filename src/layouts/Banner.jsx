import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'


import bannerHome from '../assets/bannerHome.jpg'
import bannerAbout from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg'

class Banner extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <article className="banner">
                            <h2>Chez vous, partout et ailleurs</h2>
                            <img src={bannerHome} alt="Bannière" />
                        </article>
                    </Route>
                    <Route path='/about'>
                        <article className="banner">
                            <img src={bannerAbout} alt="Bannière" />
                        </article>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Banner