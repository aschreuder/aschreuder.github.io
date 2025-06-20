
import { useState } from 'react';
import { Github } from 'lucide-react';
import ProjectRepository from './ProjectRepository';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Automated AWS infrastructure deployment using Terraform and Ansible for a multi-environment setup.",
      tech: ["Terraform", "AWS", "Ansible"],
      githubUrl: "https://github.com/yourusername/cloud-infrastructure"
    },
    {
      title: "Monitoring Dashboard",
      description: "Built a comprehensive monitoring solution using Prometheus, Grafana, and custom alerting rules.",
      tech: ["Prometheus", "Grafana", "Docker"],
      githubUrl: "https://github.com/yourusername/monitoring-dashboard"
    },
    {
      title: "CI/CD Pipeline",
      description: "Designed and implemented automated deployment pipelines reducing deployment time by 80%.",
      tech: ["Docker", "Python", "Git"],
      githubUrl: "https://github.com/yourusername/cicd-pipeline"
    }
  ];

  const handleGithubClick = (githubUrl: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(githubUrl, '_blank');
  };

  return (
    <>
      <section id="projects" className="py-20 px-6 bg-slate-800/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group cursor-pointer relative"
                onClick={() => setSelectedProject(project)}
              >
                {/* GitHub link button */}
                <button
                  onClick={(e) => handleGithubClick(project.githubUrl, e)}
                  className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 bg-slate-700/50 rounded-lg border border-slate-600/50 hover:border-cyan-400/50 hover:bg-slate-600/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="View on GitHub"
                >
                  <Github size={16} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300" />
                  <span className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-300">GitHub</span>
                </button>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 pr-20">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-cyan-400 font-medium text-sm group-hover:text-cyan-300 transition-colors duration-300">
                  View Repository →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectRepository
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
