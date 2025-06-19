import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const VerticalContactPanel = () => {
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:' },
    { icon: FileText, label: 'Medium', href: '#' }
  ];

  return (
    <div className="fixed left-4 bottom-4 z-20 hidden sm:block">
      <div className="flex flex-col space-y-3">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="p-3 bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group shadow-lg"
            aria-label={link.label}
          >
            <link.icon 
              size={20} 
              className="text-slate-300 group-hover:text-purple-400 transition-colors duration-300" 
            />
          </a>
        ))}
        {/* Connecting line */}
        <div className="w-0.5 h-16 bg-gradient-to-t from-purple-400/50 to-transparent mx-auto"></div>
      </div>
    </div>
  );
};

export default VerticalContactPanel;
