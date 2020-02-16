import React from 'react'
import { NavLink } from 'react-router-dom'

import './MainNavigation.css'

const mainNavigation = ({cartItemNumber}) => (
    <div class="siimple-navbar main-navigation">
        <a class="siimple-navbar-title">Title</a>

        <div class="siimple--float-right">
            <NavLink to="/" class="siimple-navbar-item">Products</NavLink>
            <NavLink to="/cart" class="siimple-navbar-item">Cart ({cartItemNumber})</NavLink>
        </div>
    </div>
)

export default mainNavigation
