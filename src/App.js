import logo from './logo.svg';
import './App.css';
import AddLib from './componenets/AddLib';
import SearchLib from './componenets/SearchLib';
import ViewLib from './componenets/ViewLib';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddLib/>}/>
      <Route path='/SearchLib' element={<SearchLib/>}/>
      <Route path='/ViewLib' element={<ViewLib/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;