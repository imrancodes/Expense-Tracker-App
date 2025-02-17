import { useEffect, useState } from "react"
import Button from "../CommonComponents/Button"
import CardContainer from "../CommonComponents/CardContainer"
import Input from "../CommonComponents/Input"
import { useDispatch, useSelector } from "react-redux"
import { setExpense } from "../../slices/budgetSlice"
import { useRef } from "react"


const LeftBottomCard = () => {
    const [expenseValue, setExpenseValue] = useState("")
    const dispatch = useDispatch()
    const currentExpense = useSelector(state => state.budget.expense)
    const prevExpenseValue = useRef(currentExpense)

    useEffect(() => {
      prevExpenseValue.current = currentExpense
    }, [currentExpense])
    
    const handleExpenseValue = () => {
        dispatch(setExpense(Number(expenseValue + prevExpenseValue.current)))
        setExpenseValue("")
    }

    return (
        <>
            <div>
                <CardContainer title="Add Expense">
                    <Input label="Expense Title:" placeholder='Expense Title' type="text" />
                    <Input value={expenseValue} onValueChange={value => setExpenseValue(value)} label="Amount:" placeholder='Expense Amount' type="number" />
                    <Button onClick={handleExpenseValue} text="Add Expense" classname="bg-[#007BFF]" />
                </CardContainer>
            </div>
            <div>
                <Button text='Reset All' classname="bg-[#DC3545]" />
            </div>
        </>
    )
}

export default LeftBottomCard