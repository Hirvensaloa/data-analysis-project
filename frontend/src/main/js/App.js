import React, {useState} from 'react'

import Landing from './landing'
import Header from './header'

import '../css/App.css'

const App = () => {

    // TODO: Store list of pages in JSON
    const pages = [
        {
            id: 0,
            name: 'Data Center'
        },
        {
            id: 1,
            name: 'Question Manager'
        }
    ]
    // State variable for storing the identifier for the current active page
    const [activePage, setActive] = useState(pages[0].name)

    // Event handler for clicking menu buttons
    const handleMenuClick = (event, {name}) => {
        event.preventDefault()
        console.log(`Changing activePage to ${name}`)
        setActive(name)
    }

    return (
        <div className="App">
            <Header
                pages={pages}
                activePage={activePage}
                handleMenuClick={handleMenuClick}
            />
            <Landing
                pages={pages}
                activePage={activePage} 
            />
        </div>
    )
}

export default App
