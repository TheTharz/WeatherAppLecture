import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherService from './components/WeatherService';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<WeatherService />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
