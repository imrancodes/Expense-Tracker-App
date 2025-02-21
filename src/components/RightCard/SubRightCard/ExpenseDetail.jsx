import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editExpense, deleteExpense } from '../../../slices/expenseSlice';

const ExpenseDetail = ({ expenseName, amount }) => {
    const [isExpenseEditable, setIsExpenseEditable] = useState(false);
    const dispatch = useDispatch();
    const [expenseTitle, setExpenseName] = useState(expenseName);
    const [expenseValue, setExpenseValue] = useState(amount);
    const currentBudget = useSelector((state) => state.expense.budget);

    const handleExpenseEdit = () => {
        if (expenseValue > currentBudget) {
            alert(
                'Your expense is higher than your budget. Please adjust accordingly!'
            );
            return;
        }

        dispatch(
            editExpense({
                expense: expenseValue,
                expenseTitle,
            })
        );
        setIsExpenseEditable(!isExpenseEditable);
    };

    const handleExpenseDelete = () => {
        dispatch(deleteExpense(expenseName));
    };

    return (
        <>
            <div className="flex justify-around gap-2 my-4 text-xl font-light">
                <input
                    type="text"
                    defaultValue={expenseTitle}
                    readOnly={!isExpenseEditable}
                    className="outline-0 text-center"
                    onChange={(e) => setExpenseName(e.target.value)}
                />
                <input
                    type="text"
                    defaultValue={`${expenseValue}.00`}
                    readOnly={!isExpenseEditable}
                    className="outline-0 text-center"
                    onChange={(e) => setExpenseValue(Number(e.target.value))}
                />
                <div className="flex gap-4">
                    <button
                        onClick={() =>
                            isExpenseEditable
                                ? handleExpenseEdit()
                                : setIsExpenseEditable(true)
                        }
                        className={`${
                            isExpenseEditable ? 'bg-yellow-400' : 'bg-green-400'
                        } text-white px-2 py-1 rounded cursor-pointer`}>
                        {isExpenseEditable ? 'Save' : 'Edit'}
                    </button>
                    <button
                        onClick={() => handleExpenseDelete()}
                        className="bg-red-400 text-white px-2 py-1 rounded cursor-pointer">
                        Remove
                    </button>
                </div>
            </div>
            <hr />
        </>
    );
};

export default ExpenseDetail;
