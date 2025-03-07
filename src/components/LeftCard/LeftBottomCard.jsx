import { useMemo, useState } from 'react';
import Button from '../CommonComponents/Button';
import CardContainer from '../CommonComponents/CardContainer';
import Input from '../CommonComponents/Input';
import { useDispatch, useSelector } from 'react-redux';
import { resetExpense, setExpense } from '../../slices/expenseSlice';

const LeftBottomCard = () => {
    const [expenseValue, setExpenseValue] = useState('');
    const [expenseTitle, setExpenseTitle] = useState('');
    const dispatch = useDispatch();
    let expenseValues = useSelector((state) => state.expense);

    const selectExpenseDetail = useSelector(
        (state) => state.expense.expenseDetail
    );

    const currentExpense = useMemo(
        () =>
            selectExpenseDetail.reduce((sum, item) => {
                return sum + item.expense;
            }, 0),
        [selectExpenseDetail]
    );

    const handleExpenseValue = (e) => {
        e.preventDefault();
        if (
            Number(currentExpense) + Number(expenseValue) >
            Number(expenseValues.budget)
        ) {
            alert(
                'Your expense is higher than your budget. Please adjust accordingly!'
            );
        } else {
            dispatch(
                setExpense({
                    expense: Number(expenseValue),
                    expenseTitle,
                })
            );
            setExpenseValue('');
            setExpenseTitle('');
        }
    };

    const handleReset = () => {
        dispatch(resetExpense())
    }

    return (
        <>
            <div>
                <CardContainer title="Add Expense">
                    <form onSubmit={handleExpenseValue}>
                        <Input
                            label="Expense Title:"
                            placeholder="Expense Title"
                            type="text"
                            onValueChange={(title) => setExpenseTitle(title)}
                            value={expenseTitle}
                            required
                        />
                        <Input
                            value={expenseValue}
                            onValueChange={(value) =>
                                setExpenseValue(value ? Number(value) : '')
                            }
                            label="Amount:"
                            placeholder="Expense Amount"
                            type="number"
                            required
                        />
                        <Button
                            type="submit"
                            text="Add Expense"
                            classname="bg-[#007BFF]"
                        />
                    </form>
                </CardContainer>
            </div>
            <div>
                <Button onClick={handleReset} text="Reset All" classname="bg-[#DC3545]" />
            </div>
        </>
    );
};

export default LeftBottomCard;
