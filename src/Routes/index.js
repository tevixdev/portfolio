import React, { Suspense } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import * as ROUTES from 'Constants/routes'
import Progress from 'Components/Layout/Progress'
import App from 'Pages/App'

const RoutesComponent = () => {
  return (
    <Router>
      <Suspense fallback={<Progress/>}>
        <Routes>
          <Route element={<App />} path={ROUTES.HOME} />
          <Route element={<App />} path='*' />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default RoutesComponent
