import { useState } from 'react'
import { Provider } from "react-redux";
import { store, persistor } from './redux/store/redux';
import { PersistGate } from "redux-persist/integration/react";
import Home from './targets/Home'
import Skills from './targets/Skills'
import Proyects from './targets/Proyects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
      <Home/>
      <Proyects/>
      </PersistGate>
    </Provider>
  )
}

export default App
