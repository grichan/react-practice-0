import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useTransition, animated} from 'react-spring'

function Navigation() {

    const [showMenu, setShowMenu] = useState(false)
    const transitionMenu = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })
    const transitionForeground = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    
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
            {
                transitionMenu.map(({ item, key, props }) =>
                item && 
                <animated.div key={key} style={props} id='nav-list'>
                    <div>
                        AppMenu
                        <ul>
                            <li>Home</li>
                        </ul>
                    </div> 
                </animated.div>
                )
            }
            {
                transitionForeground.map(({ item, key, props }) =>
                item && 
                <animated.div key={key} style={props} id="menu-foreground" onClick={() => {setShowMenu(!showMenu)}}>
                </animated.div>
                )
            }
        </nav>
    )
}

export default Navigation
