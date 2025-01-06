import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
        image:'faithmission',
        name: 'Faith Mission',
        info:'By leveraging WordPress and incorporating sound web design principles, I developed a website that provides a seamless and informative user experience. This project included the customization of WooCommerce product pages for an optimized online shopping journey.',
        stack: ['Bootstrap', 'SCSS', 'Wordpress'],
        live: 'https://faithmissioncanada.org/',
        git: ''
    },

    {
        image:'iplocator',
        name: 'IP locator',
        info: "Developed a location-based application that utilizes user IP addresses to determine their current location and provide relevant information. The application integrates Leaflet to visually display the user's location on an interactive map, enhancing the user experience.",
        stack: ['Bootstrap', 'SCSS', 'React'],
        live: 'https://ipaddlocator.netlify.app/',
        git: ''
    },
    
    {
        image:'nations',
        name: 'World of Nations',
        info:'World Nation leverages the Rest Countries API to dynamically display comprehensive information about each country, coupled with interactive mapping capabilities powered by Leaflet to visually showcase their global locations.',
        stack: ['React', 'Tailwind', 'React Router'],
        live: 'https://worldnation.netlify.app/',
        git: 'https://github.com/Deep-dsp97/Where-In-The-World'
    },

    {
        image:'billsplitter',
        name: 'Bill Splitter',
        info:'This application addresses the common challenge of accurately dividing expenses among individuals.',
        stack: ['Bootstrap', 'SCSS', 'Wordpress'],
        live: 'https://bills-tip-splitter.netlify.app/',
        git: ''
    },
    
    {
        image:'renix',
        name: 'Renix',
        info:'Developed an elegant and informative website using WordPress, incorporating insights into web design principles to enhance the overall user experience.',
        stack: ['Wordpress', 'Bootstrap', 'Scss', 'ACF'],
        live: 'https://worldnation.netlify.app/',
        git: ''
    }

  ];

  const renderedProjects = projects.map((project, index) => {

    return(
        <div className="col-span-6 sm:col-span-3 md:col-span-2 flex flex-col border rounded-3xl overflow-hidden mb-12" key={index}>
            <div className="relative">
                <img src={`/portfolio/${project.image}.png`} alt={project.name} />
                <div className="flex flex-row absolute bottom-0 right-0 p-2">
                    { project.live && <a href={project.live} className={`rounded-full bg-white p-2 text-xl relative hover:-translate-y-2 transition-transform duration-300 ease-in-out ${project.git ? 'mr-2' : ''}`} target="_blank"><HiOutlineComputerDesktop className=""/></a> }
                    { project.git && <a href={project.git} className="rounded-full bg-white p-2 text-xl relative hover:-translate-y-2 transition-transform duration-300 ease-in-out" target="_blank"><FaGithub/></a> }
                </div>
            </div>
            <div className="md:px-5 py-5 px-5 flex flex-col items-between">
                <h3 className="font-outfit font-bold text-2xl">{project.name}</h3>
                <p className="font-dmsans text-sm mt-2 mb-3">{project.info}</p>
                <ul className="flex flex-row flex-wrap">
                    {
                        project.stack.map((tech,index) => {
                            return <li className="text-xs mr-3 border border-indogo-600 text-indigo-600 rounded-full px-3 py-2" key={index}>{tech}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
  })

  return (
    <section className="portfolio-section pt-24 max-w-6xl mx-auto relative observe-section" id="portfolio">
        <h2 className="relative text-center font-outfit text-2xl md:text-4xl font-bold text-blue-900 bottom-after-border bottom-after-border-top-65-center">My Portfolio</h2>
        <div className="portfolio-container grid grid-cols-6 gap-5 pt-20">
            {renderedProjects}
        </div>
    </section>
  )
}

export default Portfolio