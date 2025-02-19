import { useId } from "react"

const Input = ({
    label,
    classname = '',
    type = 'text',
    onValueChange,
    value,
    ...props
}) => {
    const id = useId()
    return (
        <div className="w-full flex flex-col">
            {label && <label className="text-xl mb-2" htmlFor={id}>{label}</label>}
            <input
                onChange={(e) => onValueChange && onValueChange(e.target.value)}
                type={type} id={id} {...props} className={`bg-white rounded h-10 outline-0 px-2 mb-4 ${classname}`} value={value} />
        </div>
    )
}

export default Input