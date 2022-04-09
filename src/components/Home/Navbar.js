import { icon } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

import logo from "./../../img/tFlow-logo.svg";
import beranda from "./../../img/Navbar/Beranda.svg";
import floNews from "./../../img/Navbar/FloNews.svg";
import floVest from "./../../img/Navbar/FloVest.svg";
import tCommerce from "./../../img/Navbar/T-Commerce.svg";

function Navbar() {
    return (
        <nav className="nav">
            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                    <span></span>
                </label>
                <ul class="menu__box">
                    <li>
                        <NavLink
                            exact
                            activeClassName="active"
                            className="menu__item"
                            to="/"
                        >
                            <img
                                src={beranda}
                                alt="Beranda"
                                className="menu__img"
                            />
                            <span>Beranda</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="menu__item"
                            activeClassName="active"
                            to="/tCommerce"
                        >
                            <img
                                src={tCommerce}
                                alt="T-Commerce"
                                className="menu__img"
                            />{" "}
                            T-Commerce
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="menu__item"
                            activeClassName="active"
                            to="/floVest"
                        >
                            <img
                                src={floVest}
                                alt="floVest"
                                className="menu__img"
                            />{" "}
                            FloVest
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="menu__item"
                            activeClassName="active"
                            to="/floNews"
                        >
                            <img
                                src={floNews}
                                alt="floNews"
                                className="menu__img"
                            />{" "}
                            FloNews
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="mid">
                <NavLink className={({isActive}) => 'logo' + (isActive ?' demo' : '')} to="/">
                <img src={logo} alt="logo" />
                <h3>tFlow</h3>
                </NavLink>
            </div>
            <div className="right">
                {/* <i class="fa-solid fa-user"></i> */}
                {/* <NavLink className="masuk" activeClassName='profile' to="/profile"> */}
                <NavLink className={({isActive}) => 'masuk' + (isActive ?' demo' : '')} to="/profile">
                  <FontAwesomeIcon icon="fa-solid fa-user" className="user" />
                    {/* <span>Sign in</span> */}
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
