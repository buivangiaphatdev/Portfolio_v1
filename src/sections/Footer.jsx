import socialLinks from "../constants/socialLinks";

const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
        {Object.keys(socialLinks).map((key) => (
          <div key={key}>
            <a href={socialLinks[key].link} className="social-icon" target="_blank" rel="noopener noreferrer">
              <img src={socialLinks[key].src} alt={socialLinks[key].name} className="w-1/2 h-1/2" />
            </a>
          </div>
        ))}
        </div>
  
        <p className="text-white-500">© 2024 Bui Van Gia Phat. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;