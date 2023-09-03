import logo from './logo.svg';
import './App.css';
import SearchBar from './components/Component/DefaultSearchBar';
import Button from './components/Component/Button';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import axios from 'axios';

// Pages
import Main from './components/Component/Main Components/Main';
import Header from './components/Component/SiteDefaultHeader';
import UploadVideo from './components/Component/Upload Video/UploadVideo';





function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/main' element = {<Main />} />
          <Route path='/uploadvideo' element ={<UploadVideo />} />
        </Routes>    
    </div>
    </BrowserRouter>
  );
}

export default App;
