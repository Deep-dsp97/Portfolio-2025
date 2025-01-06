const LetsTalkButton = ({children, customClass, ...rest}) => {
  return (
    <button {...rest} className={`${customClass} w-full px-4 lg:px-8 py-3 md:py-4 text-base font-bold leading-6 border rounded-full md:w-auto justify-center`}>{children}</button>
  )
}

export default LetsTalkButton;