
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Post from './components/Post';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/post' element={<Post/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
