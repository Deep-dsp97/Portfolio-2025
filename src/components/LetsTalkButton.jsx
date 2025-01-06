const LetsTalkButton = ({children, customClass, ...rest}) => {
  return (
    <button {...rest} className={`${customClass} w-full px-8 py-4 text-base font-bold leading-6 border rounded-full md:w-auto`}>{children}</button>
  )
}

export default LetsTalkButton;