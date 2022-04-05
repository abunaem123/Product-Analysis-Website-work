import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import CustomerAllReview from './components/AllReviews/CustomerAllReview';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<CustomerAllReview></CustomerAllReview>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        {/* <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
