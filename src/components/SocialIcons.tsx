import { Github, Linkedin, Mail } from 'lucide-react';

const SocialIcons = () => {
  return (
    <div className="flex items-center justify-center space-x-6 mt-8">
      <a 
        href="https://github.com/claitonr" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="GitHub"
      >
        <Github className="w-6 h-6" />
      </a>
      
      <a 
        href="https://www.linkedin.com/in/~claiton" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      
      <a 
        href="mailto:claiton@duck.com" 
        className="social-icon"
        aria-label="Email"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialIcons;