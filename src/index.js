import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './Routes'
import './Config/i18next-config'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import RefsContext from 'Context/RefsContext'

ReactDOM.render(
  <React.StrictMode>
    <RefsContext.Provider>
      <Routes />
    </RefsContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorkerRegistration.register()
