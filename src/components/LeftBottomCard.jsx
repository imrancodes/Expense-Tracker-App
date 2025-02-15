import Button from "./Button"
import CardContainer from "./CardContainer"
import Input from "./Input"


const LeftBottomCard = () => {
    return (
        <>
            <div>
                <CardContainer title="Add Expense">
                    <Input label="Expense Title:" placeholder='Expense Title' type="text" />
                    <Input label="Amount:" placeholder='Expense Amount' type="number" />
                    <Button text="Add Expense" classname="bg-[#007BFF]" />
                </CardContainer>
            </div>
            <div>
                <Button text='Reset All' classname="bg-[#DC3545]"/>
            </div>
        </>
    )
}

export default LeftBottomCard