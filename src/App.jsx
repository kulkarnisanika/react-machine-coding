import MainContainer from './problems/infinite-scroll/MainContainer';
import SearchBarDebounce from './problems/search-debouncing/SearchBarDebounce';
import TodoList from './problems/to-do-app/TodoList';
import TrafficLight from './problems/traffic-light/TrafficLight'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Select a problem</div>} />
        <Route path="/traffic-light" element={<TrafficLight />} />
        <Route path="/search-bar-debounce" element={<SearchBarDebounce />} />
        <Route path="/infinite-scoll" element={<MainContainer/>}></Route>
        <Route path="/to-do-app" element={<TodoList/>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
