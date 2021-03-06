import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style.scss';
import routes from 'routes';
import SubMenu from 'components/Menu/components/SubMenu';

const showMenus = (routes) => {

    let result = routes.map((menu, index) => {
        return <Route
            key={index}
            path={menu.path}
            exact={menu.exact}
            children={({ match }) => {
                return (
                    <li key={index}>
                        <Link to={menu.path} key={index}>
                            {menu.icon === '' ? menu.name : <i className="icon-menu-3-lines"><ion-icon name={menu.icon}></ion-icon></i>}
                        </Link>
                        <div className="dropmenu">
                            <p>{menu.label}</p>
                            <ul>
                                {
                                    menu.resources.map((subMenu, index) => {
                                        return (
                                            <SubMenu subMenu={subMenu} key={index} />
                                        )
                                    })
                                }
                            </ul>
                        </div>

                    </li>
                );
            }}
        />
    })
    return result;
}

export default function Menu() {
    
    return (
        <div id="header-nav">
            <div id="nav">
                <ol className="nav-primary">
                    <Router>
                        {showMenus(routes)}
                    </Router>
                </ol>
            </div>
        </div>
    )
}
