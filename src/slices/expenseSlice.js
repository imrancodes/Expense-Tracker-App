import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    budget: 0,
    expenseDetail: [{
        expense:0,
        expenseTitle:'Hello'
    }]
}

const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        setBudget: (state, action) => { state.budget = action.payload },
        setExpense: (state, action) => {
            state.expenseDetail.push({
                expense: action.payload.expense,
                expenseTitle: action.payload.expenseTitle
            })
        },
        editExpense: (state, action) => {
            state.expenseDetail.map(expense => expense.expenseTitle === action.payload ? action.payload : expense)
        },
        deleteExpense: (state, action) => {
            state.expenseDetail = state.expenseDetail.filter(expense => expense.expenseTitle !== action.payload)
        }

    }
})



export const { setBudget, setExpense, editExpense, deleteExpense } = expenseSlice.actions

export default expenseSlice.reducer