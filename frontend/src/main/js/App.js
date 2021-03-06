import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Manager from './QuestionTemplate/manager' 
import Hub from './dataCenter/hub'
import Header from './header'
import Creator from './QuestionTemplate/creator'

import '../css/App.css'

const App = () => {

    const pages = [
        {
            name: 'Data center',
            path: '/'
        },
        {
            name: 'Question manager',
            path: '/manager'
        }
    ]

    // State variable for storing the identifier for the current active page
    const [activePage, setActive] = useState(pages[0].name)

    return (
        <div className="App">
            <Router>
                <Header
                    pages={pages}
                    activePage={activePage}
                    setActive={setActive}
                />
                <Switch>
                    <Route path='/manager/creator'>
                        <Creator/>
                    </Route>
                    <Route path='/manager'>
                        <Manager/>
                    </Route>
                    <Route path='/'>
                        <Hub/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
