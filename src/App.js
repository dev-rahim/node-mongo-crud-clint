import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Users from './Components/Users/Users';
import AddUser from './Components/AddUser/AddUser';
import Header from './Components/Header/Header';
import UpdateUser from './Components/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/add' element={<AddUser />} />
          <Route path='/users/update/:id' element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
