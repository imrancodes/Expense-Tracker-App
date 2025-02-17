
const Button = ({
 classname = '',
 text,
 type = 'button',
 onClick,
 ...props

}) => {
  return (
    <button onClick={onClick} type={type} {...props} className={`text-center w-full cursor-pointer rounded py-2 text-white ${classname}`}>{text}</button>
  )
}

export default Button