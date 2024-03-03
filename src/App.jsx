// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './assets/global.scss'
import { HomePage } from './pages';
import Header from './components/common/header'
import Footer from './components/common/footer'

import NewsDetailPage from './pages/newsDetailPage';
import AnnounceDetailPage from './pages/AnnounceDetailPage';
import EventsDetailPage from './pages/EventsDetailPage';
function App() {


  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path="/news/:id" element={<NewsDetailPage/>} />
          <Route path="/announcements/:id" element={<AnnounceDetailPage />} />
          <Route path='/events/:id' element={<EventsDetailPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
