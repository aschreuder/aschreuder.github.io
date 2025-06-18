import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/aschreuder' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/arnaud-schreuder/' },
    { icon: Mail, label: 'Email', href: 'mailto:arnaudschreuder@gmail.com' },
    { icon: FileText, label: 'Medium', href: '#' }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Let's Connect
        </h2>
        <p className="text-xl text-slate-300 mb-12">
          I'm always interested in new opportunities and collaborations
        </p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
              aria-label={link.label}
            >
              <link.icon 
                size={24} 
                className="text-slate-300 group-hover:text-purple-400 transition-colors duration-300" 
              />
            </a>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <p className="text-slate-400">
            © 2025 Portfolio. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
