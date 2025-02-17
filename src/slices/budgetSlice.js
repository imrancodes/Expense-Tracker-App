import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    budget: 0,
    expense:0
}

const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        setBudget: (state, action) => { state.budget = action.payload },
        setExpense: (state, action) => { state.expense = action.payload }
    }
})



export const { setBudget, setExpense } = budgetSlice.actions

export default budgetSlice.reducer