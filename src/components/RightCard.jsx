import CardContainer from "./CardContainer"
import ExpenseDetail from "./ExpenseDetail"
import TitleCard from "./TitleCard"

const RightCard = () => {
  return (
    <CardContainer className="min-h-[590px]" title={null}>
      <div>
        <div className="flex items-center justify-around gap-2">
          <TitleCard title="Total Budget" amount={1000} />
          <TitleCard title="Total Expense" amount={1000} />
          <TitleCard title="Budget Left" amount={1000} />
        </div>
        <hr className="mt-5 mb-3" />
        <h2 className="text-2xl mb-3 font-semibold">Expense History:</h2>
        <hr />
        <div className="mx-10">
          <div className="flex justify-around my-4 text-xl gap-2 font-semibold">
            <h3>Expense Name</h3>
            <h3>Amount</h3>
            <h3>Action</h3>
          </div>
          <hr />
          <ExpenseDetail expenseName="Grocery" amount={1000} />
        </div>

      </div>
    </CardContainer>
  )
}

export default RightCard