

const TitleCard = ({ title, amount = 0 }) => {
  return (
    <div className="bg-gray-600 text-white px-6 py-4 rounded">
      <h1>{title}: {amount}</h1>
    </div>
  )
}

export default TitleCard