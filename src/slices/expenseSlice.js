import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    budget: 0,
    expenseDetail: [],
};

const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        setBudget: (state, action) => {
            state.budget = action.payload;
        },

        setExpense: (state, action) => {
            state.expenseDetail.push({
                expense: action.payload.expense,
                expenseTitle: action.payload.expenseTitle,
            });
        },

        editExpense: (state, action) => {
            state.expenseDetail = state.expenseDetail.map((expense) =>
                expense.expenseTitle === action.payload.expenseTitle
                    ? { ...expense, ...action.payload }
                    : expense
            );
        },

        deleteExpense: (state, action) => {
            state.expenseDetail = state.expenseDetail.filter(
                (expense) => expense.expenseTitle !== action.payload
            );
        },

        resetExpense: (state) => {
            state.budget = 0;
            state.expenseDetail = [];
        },
    },
});

export const {
    setBudget,
    setExpense,
    editExpense,
    deleteExpense,
    resetExpense,
} = expenseSlice.actions;

export default expenseSlice.reducer;