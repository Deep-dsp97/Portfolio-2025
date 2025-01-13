import Button from './LetsTalkButton';

const About = () => {
  return (
    <section className="about-section pt-24 max-w-6xl mx-auto relative observe-section" id="about">
        <h2 className="relative text-center font-outfit text-2xl md:text-4xl font-bold text-blue-900 bottom-after-border bottom-after-border-top-65-center">About Me</h2>
        <div className="grid grid-cols-4 pt-20 items-center">
            <div className="col-span-4 lg:col-span-3 grid grid-cols-2 items-end mb-5">
                <div className="col-span-2 md:col-span-1 md:px-3">
                    <p className="relative bottom-after-border bottom-after-border-top-50-left font-dmsans max-w-96 text-2xl font-bold text-blue-900 mb-12">Driven by a blend of innovation, curiosity, and a commitment to excellence.</p>
                    <p className="font-dmsans mb-5 md:mb-0">I’m a developer who is passionate about crafting user interfaces that are not only visually engaging but also designed for accessibility and peak performance. I believe great design and robust engineering go hand-in-hand to create unforgettable digital experience.</p>
                </div>
                <p className="col-span-2 md:col-span-1 font-dmsans md:px-3">In my spare time, I love staying active with outdoor sports, immersing myself in nature, diving into a good book, and continuously expanding my knowledge through learning.</p>
            </div>
            <div className="col-span-4 lg:col-span-1 max-w-sm mx-auto">
                <img src="/images/DeepPatel.png" alt="Deep Patel Profile Image" />
            </div>
            <p className="col-span-4 font-dmsans md:px-3 italic font-bold max-w-3xl mt-5">Empowering innovation through creative and efficient problem-solving, with a strong focus on delivering impactful solutions that drive meaning results and foster growth.</p>
            <div className="col-span-4 flex flex-row items-center mt-5">
              <Button customClass="inline-flex text-white bg-indigo-600 border-transparent hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600" fileName="deepkumar_patel_resume.pdf">Download CV</Button>
              <Button customClass="inline-flex ml-3 border-indigo-500 bg-white text-indigo-500 hover:bg-indigo-500 hover:text-white" scrollToId="contact">Contact Me</Button>
            </div>
        </div>
    </section>
  )
}

export default About