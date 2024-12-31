const LetsTalkButton = ({children, customClass}) => {
  return (
    <button className={`${customClass} items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600`}>{children}</button>
  )
}

export default LetsTalkButton