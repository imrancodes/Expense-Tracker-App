import { useState } from "react"
import { useDispatch } from "react-redux"
import { editExpense, deleteExpense } from "../../../slices/expenseSlice"

const ExpenseDetail = ({ expenseName, amount }) => {
    const [isExpenseEditable, setIsExpenseEditable] = useState(false)
    const dispatch = useDispatch()

    const handleExpenseEdit = () => {
        setIsExpenseEditable(true)
        dispatch(editExpense())
    }

    const handleExpenseDelete = () => {
        dispatch(deleteExpense())
    }

    return (
        <>
            <div className="flex justify-around gap-2 my-4 text-xl font-light">
                <input type="text" defaultValue={expenseName}
                    readOnly={!isExpenseEditable}
                    className="outline-0 text-center" />
                <input type="text" defaultValue={`${amount}.00`} readOnly={!isExpenseEditable} className="outline-0 text-center" />
                <div className="flex gap-4">
                    <button
                        onClick={() => isExpenseEditable ? setIsExpenseEditable(false) : handleExpenseEdit()}
                        className={`${isExpenseEditable ? 'bg-yellow-400': 'bg-green-400'} text-white px-2 py-1 rounded cursor-pointer`}>
                            {isExpenseEditable ? "Save" : "Edit"}
                        </button>
                    <button 
                    onClick={() => handleExpenseDelete()}
                    className="bg-red-400 text-white px-2 py-1 rounded cursor-pointer">Remove</button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default ExpenseDetail