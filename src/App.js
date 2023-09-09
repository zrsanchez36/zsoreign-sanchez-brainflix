import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Component/SiteDefaultHeader';
import HomePage from './pages/Page/HomePage';
import VideoDetailsPage from './pages/Page/VideoDetailsPage';
import VideoUpload from './pages/Page/Upload Video/VideoUpload';
import NotFound from './components/Component/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header  />
        <Routes>
          <Route path="*" exact element={<HomePage /> } />
          <Route path="/video-details/:videoId" element={<VideoDetailsPage />} />
          <Route path="/upload" element={<VideoUpload />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
