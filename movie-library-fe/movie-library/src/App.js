import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Show from './components/show.jsx';
import AddMovie from './components/AddMovie';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ReviewMovie } from './components/ReviewMovie';
import EditReview from './components/EditReview';
import WatchlistDisplay from './components/WatchlistDisplay';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/show" element={<Show/>} />
          <Route path="/addmovie" element={<AddMovie/>} />
          <Route path="/showreviews/:movie_id" element={< ReviewMovie />} />
          <Route path="/editreviews/:review_id" element={< EditReview />} />
          <Route path='/watchlist' element={<WatchlistDisplay />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;





