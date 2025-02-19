import { useEffect, useMemo, useState } from "react"
import Button from "../CommonComponents/Button"
import CardContainer from "../CommonComponents/CardContainer"
import Input from "../CommonComponents/Input"
import { useDispatch, useSelector } from "react-redux"
import { setExpense } from "../../slices/budgetSlice"
import { useRef } from "react"


const LeftBottomCard = () => {
    const [expenseValue, setExpenseValue] = useState("")
    const [expenseTitle, setExpenseTitle] = useState('')
    const dispatch = useDispatch()
    const currentBudget = useSelector(state => state.budget.budget)

    const selectExpenseDetail = useSelector(state => state.budget.expenseDetail)

    const currentExpense = useMemo(() => selectExpenseDetail.reduce((sum, item) => {
        return sum + item.expense
    }, 0), [selectExpenseDetail])


    const handleExpenseValue = (e) => {
        e.preventDefault()
        if (Number(currentExpense) + Number(expenseValue) > currentBudget) {
            alert("Your expense is higher than your budget. Please adjust accordingly!")
        } else {
            dispatch(setExpense({
                expense: Number(currentExpense) + Number(expenseValue),
            }))
            setExpenseValue("")
        }
    }

    return (
        <>
            <div>
                <CardContainer title="Add Expense">
                    <form onSubmit={handleExpenseValue}>
                        <Input label="Expense Title:" placeholder='Expense Title' type="text"
                            onValueChange={value => setExpenseTitle(value)} />
                        <Input value={expenseValue} onValueChange={value => setExpenseValue(value ? Number(value) : "")} label="Amount:" placeholder='Expense Amount' type="number" />
                        <Button type="submit" text="Add Expense" classname="bg-[#007BFF]" />
                    </form>
                </CardContainer>
            </div>
            <div>
                <Button text='Reset All' classname="bg-[#DC3545]" />
            </div>
        </>
    )
}

export default LeftBottomCard