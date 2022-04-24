import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Header from '../src/components/header'
import AddExpense from './pages/addExpense';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/add-expense' exact element={<AddExpense />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
