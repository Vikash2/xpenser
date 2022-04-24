import React from 'react'
import ExpenseList from '../../components/expense-list';

import Topfold from '../../components/header/topfold';

import './Home.css'
const Home = () => {
    return (
        <div className="home">
            <Topfold></Topfold>
            <ExpenseList />
        </div>
    )
}

export default Home;
