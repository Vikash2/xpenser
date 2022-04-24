import React from 'react'
import AddForm from '../../components/addForm'
import Topfold from '../../components/header/topfold'
import './addExpense.css'

const AddExpense = () => {
    return (
        <div className='add-expense'><Topfold />
            <AddForm />
        </div>
    )
}

export default AddExpense