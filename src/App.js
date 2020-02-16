import React from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch 
} from 'react-router-dom'

import GlobalState from './context/GlobalState'
import ProductsPage from './pages/Products'
import CartPage from './pages/Cart'

const App = () => (
    <GlobalState>
        <Router>
            <Switch>
                <Route path="/" component={ProductsPage} exact />
                <Route path="/cart" component={CartPage} exact />
            </Switch>
        </Router>
    </GlobalState>
)

export default App
