const LetsTalkButton = ({children, customClass, scrollToId, fileName }) => {

  const handleClickScroll = () => {
    if(scrollToId){
      const section = document.getElementById(scrollToId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }else{
      const fileUrl = `/${fileName}`;
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      link.click();
    }
  }

  return (
    <button className={`${customClass} w-full px-4 lg:px-8 py-3 md:py-4 text-base font-bold leading-6 border rounded-full md:w-auto justify-center`} onClick={handleClickScroll}>{children}</button>
  )
}

export default LetsTalkButton;