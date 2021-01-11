import React from 'react'
import {Menu} from 'semantic-ui-react'

import aware_vec from '../resources/aware.svg'
import '../css/header.css'

const Header = ({pages, activePage, handleMenuClick}) => {

    return (

        <div className="aware-header">
            <img className="aware_vec" src={aware_vec} alt="Aware logo" />
            <Menu secondary className="header-nav">
                {pages.map(page => (
                    <Menu.Item className="nav-item"
                        name={page.name}
                        active={activePage===page.name}
                        onClick={handleMenuClick}
                    />
                ))}
            </Menu>
        </div>
        
    )
}

export default Header