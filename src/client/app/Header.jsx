import React from 'react'

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <nav className="navbar navbar-dark bg-inverse">
                <a className="navbar-brand" href="#">Pathfinder Tools</a>
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Spell Search </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Custom Monster Creation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Loot Generator</a>
                    </li>`
                </ul>
            </nav>
        )
    }
}


export default Header;
