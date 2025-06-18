
const TechStack = () => {
  const technologies = [
    { name: 'Terraform', logo: '🏗️' },
    { name: 'Docker', logo: '🐳' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Linux', logo: '🐧' },
    { name: 'Ansible', logo: '🔧' },
    { name: 'Puppet', logo: '🎭' },
    { name: 'Networking', logo: '🌐' },
    { name: 'Python', logo: '🐍' },
    { name: 'Bash', logo: '💻' },
    { name: 'Git', logo: '📚' },
    { name: 'ELK', logo: '📊' },
    { name: 'Datadog', logo: '🐕' },
    { name: 'Icinga', logo: '📈' },
    { name: 'Prometheus', logo: '🔥' },
    { name: 'Grafana', logo: '📉' }
  ];

  // Split technologies into 2 rows of equal length
  const midpoint = Math.ceil(technologies.length / 2);
  const firstRow = technologies.slice(0, midpoint);
  const secondRow = technologies.slice(midpoint);

  const TechRow = ({ techs }: { techs: typeof technologies }) => (
    <div className="flex justify-center gap-6 mb-8">
      {techs.map((tech, index) => (
        <div
          key={index}
          className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group cursor-pointer flex-shrink-0"
        >
          <div className="text-center">
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
              {tech.logo}
            </div>
            <h3 className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap">
              {tech.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="tech" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Tech Stack
        </h2>
        <div className="flex flex-col items-center">
          <TechRow techs={firstRow} />
          <TechRow techs={secondRow} />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
