import Button from "./LetsTalkButton";

const HeroSection = () => {
  return (
    <section className="hero-section xl:container mx-auto bg-violet-50 shadow-inner flex flex-col justify-center items-center py-8 mt-5 rounded-3xl observe-section" id="home">
        <div>
            <h1 className="sm:mb-5 xl:mb-6 flex flex-col items-center xl:items-start">
                <span className="hey-there text-violet-900 font-outfit text-md sm:text-lg md:text-3xl font-bold">Hey There!, I&apos;m-<br/></span>
                <span className="my-name text-blue-950 text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold font-outfit">Deepkumar Patel</span>
            </h1>
            <p className="font-outfit profession text-violet-900 text-md sm:text-lg md:text-3xl font-bold text-center xl:text-left">Front-End Web Developer </p>
            <div className="flex flex-row items-center">
              <Button customClass="inline-flex mt-4 text-white bg-indigo-600 border-transparent hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600" scrollToId="portfolio">My portfolio</Button>
              <Button customClass="inline-flex mt-4 ml-3 border-indigo-500 bg-white text-indigo-500 hover:bg-indigo-500 hover:text-white" scrollToId="contact">Contact Me</Button>
            </div>
        </div>
    </section>
  )
}

export default HeroSection;