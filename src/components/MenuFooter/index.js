import React from 'react'
import './style.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routes from 'routes';

const showMenuFooter = (routes) => {
    var result = null;
    result = routes.map((route, index) => {
        return (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={({ match }) => {
                    return (
                        <div className="menu-link">
                            <p>{route.label}</p>
                            <ul>
                                {
                                    route.resources.map((subMenu, index) => {
                                        return (
                                            <li>
                                                <Link href="/">{subMenu.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                }}
            />
        )
    })
    return result;
}

export default function MenuFooter() {
    return (
        <div className="menu-footer">
            <h2>Satorisan.com</h2>
            <Router>
                {showMenuFooter(routes)}
            </Router>
            <hr />
        </div>
    )
}
