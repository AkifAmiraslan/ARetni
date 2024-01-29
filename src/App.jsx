// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './assets/global.scss'
import { HomePage } from './pages';
import Header from './components/common/header'
import Footer from './components/common/footer'
function App() {


  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
