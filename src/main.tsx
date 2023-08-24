import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import store from './redux/store'
import { Provider } from 'react-redux'
import './i18n'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Suspense fallback='Loading'>
                <App />
            </Suspense>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
