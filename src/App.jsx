import AccordionList from './problems/accordion/AccordionList';
import AutoComplete from './problems/autocomplete/AutoComplete';
import MainContainer from './problems/infinite-scroll/MainContainer';
import OtpInput from './problems/otp-input/OtpInput';
import PaginationContainer from './problems/pagination/PaginationContainer';
import ProgressBar from './problems/progress-bar/ProgressBar';
import SearchBarDebounce from './problems/search-debouncing/SearchBarDebounce';
import { SearchContainer } from './problems/search-product/SearchContainer';
import Home from './problems/theme-changer/Home';
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
        <Route path="/theme-changer" element={<Home/>}></Route>
        <Route path="/progress-bar" element={<ProgressBar/>}></Route>
        <Route path="/autocomplete" element={<AutoComplete/>}></Route>
        <Route path="/pagination" element={<PaginationContainer/>}></Route>
        <Route path="/otp-input" element={<OtpInput/>}></Route>
        <Route path="/accordion" element={<AccordionList/>}></Route>
        <Route path="/search-product" element={<SearchContainer/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
