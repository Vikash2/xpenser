import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'
import { categories } from '../../contants/add-expense'
import { addExpense } from '../../redux/actions/expenses'
import './addForm.css'
import SuccessModal from './success-modal';

const AddForm = () => {
    const dispatch = useDispatch();
    const cat = categories;
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState()
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleAmountChange = (e) => {
        const val = parseFloat(e.target.value);
        if (isNaN(val)) {
            setAmount("");
            return;
        }
        setAmount(val);
    }

    const handleSubmit = () => {
        if (title === "" || amount === "" || !category) {
            const notify = () => toast("Please enter valid data!");
            console.log("Toast");
            notify();
            return;
        }
        const data = {
            title, amount, category, createdAt: new Date()
        }
        dispatch(addExpense(data));
        setModalOpen(true);
    }

    const handleCategory = (category) => {
        setCategory(category);
        setCategoryOpen(false);
    };
    return (
        <div className='add-form'>
            <ToastContainer
                position="bottom-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />
            <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            <div className="form-item">
                <label>Title</label>
                <input placeholder='Give a name to your expense' value={title} onChange={(e) => handleTitleChange(e)} />
            </div>
            <div className="form-item">
                <label>Amount ₹</label>
                <input className='amount-input' placeholder='Enter amount' value={amount} onChange={(e) => handleAmountChange(e)} />
            </div>
            <div className="category-container-parent">
                <div className="category">
                    <div className="category-dropdown" onClick={() => setCategoryOpen(!categoryOpen)}>
                        <label>{category ? category.title : "Category"}</label>
                        <i className='fi-rr-angle-down'></i>
                    </div>
                    {categoryOpen && (
                        <div className="category-container">
                            {cat.map((category) => (
                                <div
                                    className="category-item"
                                    style={{ borderRight: `5px solid ${category.color}` }}
                                    key={category.id}
                                    onClick={() => handleCategory(category)}
                                >
                                    <label>{category.title}</label>
                                    <img src={category.icon} alt={category.title} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="form-add-button">
                <div onClick={handleSubmit}>
                    <label>Add</label>
                    <i className="fi-rr-paper-plane"></i>
                </div>
            </div>
        </div>
    )
}

export default AddForm;
