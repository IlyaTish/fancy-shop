import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import SwiperCore, { Autoplay, Mousewheel } from 'swiper'

import store from './store'
import App from './App'
import reportWebVitals from './reportWebVitals'

SwiperCore.use([Autoplay, Mousewheel])

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
