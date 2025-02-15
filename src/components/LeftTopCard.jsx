import Button from "./Button"
import CardContainer from "./CardContainer"
import Input from "./Input"


const LeftTopCard = () => {
  return (
    <CardContainer title="Add Budget">
        <Input label="Budget:" placeholder='Enter Budget' type="number"/>
        <Button text="Add Budget" classname="bg-[#007BFF] " />
    </CardContainer>
  )
}

export default LeftTopCard