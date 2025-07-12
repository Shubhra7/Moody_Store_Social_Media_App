
const Button = ({
    children,
    type="button",
    bgColor="bg-blue-600",
    textColor='text-white',
    className='',
    ...props
}) => {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} hover:bg-blue-700 transition duration-300 ${className}`} {...props}>
        {/* children help to pass the text(child) in position */}
        {children}
    </button>
  )
}
export default Button