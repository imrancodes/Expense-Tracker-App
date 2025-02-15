
const Button = ({
 classname = '',
 text,
 type = 'button',
 ...props

}) => {
  return (
    <button type={type} {...props} className={`text-center w-full cursor-pointer rounded py-2 text-white ${classname}`}>{text}</button>
  )
}

export default Button