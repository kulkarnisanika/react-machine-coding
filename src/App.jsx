import SearchBarDebounce from './problems/search-debouncing/SearchBarDebounce';
import TrafficLight from './problems/traffic-light/TrafficLight'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Select a problem</div>} />
        <Route path="/traffic-light" element={<TrafficLight />} />
        <Route path="/search-bar-debounce" element={<SearchBarDebounce />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
