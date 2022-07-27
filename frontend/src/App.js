import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing';
import Main from './pages/main/Main';
import Register from './pages/Register/Register';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route exact path='/' element={<Landing/>} />
      <Route exact path='/register' element={<Register/>} />
      <Route exact path='/main' element={<Main/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
