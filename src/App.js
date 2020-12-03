import React, { useEffect, Fragment } from 'react'
import Searchbar from './components/layouts/Searchbar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layouts/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/tech/AddTechModal'
import TechList from './components/tech/TechListModal'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.js'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'

const App = () => {
  useEffect(() => {
    //auto init materialize js
    M.AutoInit()
  })
  return (
    <Provider store={store}>
      <Fragment>
        <Searchbar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechList />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  )
}

export default App
