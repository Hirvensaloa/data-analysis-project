import React from 'react'
import {Menu} from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'

import aware_vec from '../resources/aware.svg'
import '../css/header.css'

const Header = ({pages, activePage, setActive}) => {

    let history = useHistory()

    //Routes to according page and set page active. 
    const handleClick = (page) => {

        history.push(page.path)

        setActive(page.name)
    }

    return (

        <div className="aware-header">
            <img className="aware_vec" src={aware_vec} alt="Aware logo" />
            <Menu secondary className="header-nav">
                {pages.map((page, index) => (
                    <Menu.Item className="nav-item"
                        key={index}
                        name={page.name}
                        active={activePage===page.name}
                        onClick={() => handleClick(page)}
                    >
                    </Menu.Item>
                ))}
            </Menu>
        </div>
        
    )
}

export default Header