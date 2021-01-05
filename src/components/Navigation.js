import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navigation() {

    const [showMenu, setShowMenu] = useState(false)

    let menu
    
    if (showMenu) {
        menu = 
        <ul id='nav-list'>
            <li>Home</li>
        </ul>
    }

    
    return (
        <nav>
            <div id='nav-main-box'>
                <label> App name</label>
                <FontAwesomeIcon
                    id="nav-hamburger"  
                    icon={faBars}
                    onClick={() => {setShowMenu(!showMenu)}}
                />
            </div>
            { menu }
        </nav>
    )
}

export default Navigation
