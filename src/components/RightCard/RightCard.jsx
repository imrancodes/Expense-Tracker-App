import CardContainer from '../CommonComponents/CardContainer';
import ExpenseDetail from './SubRightCard/ExpenseDetail';
import TitleCard from './SubRightCard/TitleCard';
import { useSelector } from 'react-redux';

const RightCard = () => {
    const value = useSelector((state) => state.expense);
    const expenseValue = value.expenseDetail.reduce(
        (sum, item) => sum + item.expense,
        0
    );

    console.log(expenseValue);

    return (
        <CardContainer className="min-h-[590px]" title={null}>
            <div>
                <div className="flex items-center justify-around gap-2">
                    <TitleCard title="Total Budget" amount={value.budget} />
                    <TitleCard title="Total Expense" amount={expenseValue} />
                    <TitleCard
                        title="Budget Left"
                        amount={value.budget - expenseValue}
                    />
                </div>
                <hr className="mt-5 mb-3" />
                <h2 className="text-2xl mb-3 font-semibold">
                    Expense History:
                </h2>
                <hr />
                <div className="mx-10">
                    <div className="flex justify-around my-4 text-xl gap-2 font-semibold">
                        <h3>Expense Name</h3>
                        <h3>Amount</h3>
                        <h3>Action</h3>
                    </div>
                    <hr />
                    {value.expenseDetail.map((expense) => (
                        <div key={expense.expenseTitle} className="w-full">
                            <ExpenseDetail
                                expenseName={expense.expenseTitle}
                                amount={expense.expense}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </CardContainer>
    );
};

export default RightCard;
