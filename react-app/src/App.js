import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/detail';
import Update from './pages/update/update';

function App() {
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path="/update/:id" element={<Update />}/>
      </Routes>
    </BrowserRouter>
  </div>);
}

export default App;
