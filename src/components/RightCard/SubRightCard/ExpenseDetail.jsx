
const ExpenseDetail = ({ expenseName, amount }) => {
    return (
        <>
            <div className="flex justify-around gap-2 my-4 text-xl font-light">
                <input type="text" value={expenseName} readOnly className="outline-0 text-center" />
                <input type="text" value={`${amount}.00`} className="outline-0 text-center" />
                <div className="flex gap-4">
                    <button className="bg-green-400 text-white px-2 py-1 rounded cursor-pointer">Edit</button>
                    <button className="bg-red-400 text-white px-2 py-1 rounded cursor-pointer">Remove</button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default ExpenseDetail