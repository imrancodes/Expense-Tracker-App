const CardContainer = ({title, children, className=""}) => {
  return (
    <div className={`bg-gray-400 px-6 py-4 rounded ${className}`}>
        <h2 className="text-3xl pb-1 font-semibold">{title}</h2>
        {children}
    </div>
  )
}

export default CardContainer