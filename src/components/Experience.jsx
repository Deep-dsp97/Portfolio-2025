const Experience = () => {

  const workHistory = [
        {
            position: 'Web Developer',
            company: 'Intrigue Media Solution Inc',
            timespan: 'Mar 2024 - Nov 2024',
            role: 'Managed a portfolio of 128 WordPress websites, ensuring optimal site health and minimal downtime through regular plugin and core updates, backups, and proactive security monitoring. Provided comprehensive ticket support, resolving technical issues, implementing feature requests, and debugging website functionality to deliver seamless user experiences. Collaborated with clients and internal teams to troubleshoot and resolve website performance, functionality, and design concerns, adhering to strict SLAs. Documented solutions and best practices to streamline future support processes and enhance operational efficiency.'
        },
        {
            position: 'Front-End Developer',
            company: 'The Branding Firm Inc',
            timespan: 'May 2022 - Mar 2024',
            role: 'Developed pixel-perfect, user/SEO-friendly websites, two of which received prestigious IAC awards for excellence. Consecutively managed plugins and performed weekly core updates for 7 WordPress websites, proactively preventing security risks and ensuring optimal site health. Significantly enhanced the mobile and web performance of a specific website by an impressive 10-12%, optimizing its speed, responsiveness, and overall functionality. Successfully developed a website achieving an accessibility score of 98/100 according to Lighthouse testing standards. Identified and removed hidden malicious code during a phishing attack, restoring the website to full functionality.'
        },
        {
            position: 'Web Developer',
            company: 'Redding Designs Inc',
            timespan: 'Jul 2021 - May 2022',
            role: 'Developed responsive, pixel-perfect, and AODA-compliant websites, ensuring a coherent feel and user experience across all devices. Fostered client confidence by providing post-launch training on editing WordPress pages and posts. Prioritized internal development activities while effectively addressing urgent, often unscheduled, development requests with a high level of urgency.'
        }
  ];

  const renderedHistory = workHistory.map((work, index) => {
    return(
        <div className={`timeline-block mb-8 ${ ( index + 1 ) % 2 != 0 ? 'timeline-block-right float-right' : 'timeline-block-left md:flex-row-reverse md:text-right' } flex`} key={index}>
            <div className="marker rounded-full mt-2"></div>
            <div className={`timeline-content  ml-5 ${ (index + 1 ) % 2 == 0 ? 'md:mr-5 md:ml-0' : ''}`}>
                <h3 className="font-outfit font-bold text-lg">{work.position}</h3>
                <p className="font-dmsans italic text-sm font-semibold">{work.company}</p>
                <p className="font-dmsans text-xs">{work.timespan}</p>
                <ul>
                    <li className="font-dmsans my-1 text-sm lg:text-base">{work.role}</li>
                </ul>
            </div>
        </div>
    )
  })
  return (
    <section className="exp-section pt-24 mx-auto relative observe-section" id="exp">
        <h2 className="relative text-center font-outfit text-2xl md:text-4xl font-bold text-blue-900 bottom-after-border bottom-after-border-top-65-center">My Experience</h2>
        <div className="timeline-container max-w-6xl relative overflow-hidden mx-auto mt-20">
            {renderedHistory}
        </div>
    </section>
  )
}

export default Experience;