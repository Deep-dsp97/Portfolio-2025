import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer className="footer-container negative-margin-rl-12">
        <div className="flex flex-col-reverse sm:flex-row px-3 justify-between flex-wrap items-center py-5 max-w-6xl mx-auto text-center font-dmsans">
          &copy; Design & Built by Deepkumar Patel
          <SocialMedia/>
        </div>
    </footer>
  )
}

export default Footer