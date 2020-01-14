import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter' 
import 'normalize.css/normalize.css'
import './styles/base/styles.scss'
import storeCreator from './store/configureStore'
import { Provider } from 'react-redux'

const store = storeCreator()
store.subscribe(() => {
    const state = store.getState()
    console.log(state)
})

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.querySelector('#app'))