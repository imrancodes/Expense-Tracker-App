import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    budget: 0,
    expenseDetail: [{
        expense: 0,
        expenseTitle: "Hello"
    },]
}

const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        setBudget: (state, action) => { state.budget = action.payload },
        setExpense: (state, action) => {
            state.expenseDetail.push({
                expense: action.payload.expense,
                expenseTitle: action.payload.expenseTitle
            })
        },
    }
})



export const { setBudget, setExpense } = budgetSlice.actions

export default budgetSlice.reducer