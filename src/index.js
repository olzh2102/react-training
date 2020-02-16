import React from 'react'
import {render} from 'react-dom'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'

import 'siimple/dist/siimple.css'

import App from './App'
import {shopReducer} from './context/reducers'

const store = createStore(shopReducer, applyMiddleware(reduxThunk))
const componentToRender = <Provider store={store}><App /></Provider>
const domNode = document.getElementById('root')

render(componentToRender, domNode)

