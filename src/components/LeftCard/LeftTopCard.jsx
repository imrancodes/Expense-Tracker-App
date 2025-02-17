import { useRef, useState } from "react"
import Button from "../CommonComponents/Button"
import CardContainer from "../CommonComponents/CardContainer"
import Input from "../CommonComponents/Input"
import { useDispatch, useSelector } from "react-redux"
import { setBudget } from "../../slices/budgetSlice"
import { useEffect } from "react"

const LeftTopCard = () => {
  const [budgetValue, setBudgetValue] = useState("")
  const dispatch = useDispatch()
  const currentBudget = useSelector(state => state.budget.budget)
  const prevBudgetValue = useRef(currentBudget)



  useEffect(()=>{
    prevBudgetValue.current = currentBudget
  },[currentBudget])

  const handleAddBudget = () => {
    dispatch(setBudget(Number(budgetValue + prevBudgetValue.current)))
    setBudgetValue("")
  }

  return (
    <CardContainer title="Add Budget">
      <Input label="Budget:" placeholder='Enter Budget' type="number" value={budgetValue}
        onValueChange={(value) => setBudgetValue(value)} />
      <Button onClick={handleAddBudget} text="Add Budget" classname="bg-[#007BFF] " />
    </CardContainer>
  )
}

export default LeftTopCard