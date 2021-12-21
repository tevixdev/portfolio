import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './Routes'
import './Config/i18next-config'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorkerRegistration.register()
