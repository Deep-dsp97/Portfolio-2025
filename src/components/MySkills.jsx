const MySkills = () => {
    
    const logos = [
        'html','css','bootstrap', 'tailwind', 'sass', 'wordpress',
        'react','jquery','javascript', 'figma', 'photoshop', 'git'
    ];

    const renderedLogos = logos.map((logo, index) => {
        return (
            <div className="col-span-3 sm:col-span-2 lg:col-span-1 mb-5 py-5 lg:py-8 px-5 rounded-3xl border flex justify-center" key={index}>
                <img className="max-w-24" src={`/skills/${logo}.png`} alt={`${logo} logo`} />
            </div>
        )
    })

    return (
        <section className="myskills-section pt-24 max-w-6xl mx-auto relative observe-section" id="skills">
            <h2 className="relative text-center font-outfit text-2xl md:text-4xl font-bold text-blue-900 bottom-after-border bottom-after-border-top-65-center">My Skills</h2>
            <div className="grid grid-cols-6 gap-x-3 pt-20">   
                {renderedLogos}
            </div>
        </section>
    )
}

export default MySkills;