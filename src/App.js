import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import CustomerAllReview from './components/AllReviews/CustomerAllReview';
import Dashboard from './components/Dashboard/Dashboard';
import Blog from './components/Blog/Blog';
import NoFound from './components/NoFound/NoFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<CustomerAllReview></CustomerAllReview>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NoFound></NoFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
