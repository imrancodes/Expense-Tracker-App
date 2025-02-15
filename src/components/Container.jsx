import LeftBottomCard from "./LeftBottomCard"
import LeftTopCard from "./LeftTopCard"
import RightCard from "./RightCard"

const Container = () => {
    return (
        <div className='bg-gray-600 w-full rounded-xl flex px-12 py-8 gap-4 '>
            <div className="flex flex-col gap-6 min-w-[25%]">
                <LeftTopCard />
                <LeftBottomCard />
            </div>
            <div className="min-w-[75%]">
                <RightCard />
            </div>
        </div>
    )
}

export default Container