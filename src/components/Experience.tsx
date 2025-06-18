import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      title: "Site Reliability Engineer",
      company: "BestSecret Group GmbH",
      period: "Dec 2023 - Present",
      description: [
        "Migrated the UptimeRobot URL monitoring solution from Ansible to Terraform, using GitLab CI/CD for automation and Azure for secure Terraform state management",
        "Developed and executed a change protocol for Proxmox 7 to 8 upgrade, ensuring system stability with zero downtime",
        "Optimized alerting systems by adjusting thresholds and implementing automated incident handling processes, significantly reducing false positives and improving the signal-to-noise ratio during On-call hours. As a result, on-call alerts decreased from 645 in February 2024 to 117 by August 2024, improving response efficiency and reducing alert fatigue.",
        "Conducted code reviews and approved production-level configuration changes, safeguarding deployment integrity and stability."
      ],
      technologies: ["Azure", "Terraform", "Docker", "Git", "Ansible", "Prometheus", "Datadog", "ELK", "Grafana"]
    },
    {
      title: "Infrastructure Engineer", 
      company: "Paysafe Group",
      period: "Jun 2021 - Nov 2023",
      description: [
        "Successfully led the migration of all application servers to a new virtual environment running an upgraded version of Debian. Leveraged Terraform for provisioning and building new virtual machines and utilized Puppet for seamless configuration management. Integrated GitLab CI/CD to fully automate the deployment pipeline, ensuring smooth, efficient, and reliable application deployments across the new infrastructure.",
        "Contributed to the successful migration of our on-premise SFTP solution to AWS, leveraging Terraform to build a resilient infrastructure across two regions and four availability zones, ensuring high availability and security.",
        "Ensured high availability of applications, databases, and services using Icinga2 and Nagios by developing custom Python scripts for advanced monitoring. This included a ZFS monitoring script to track storage performance and health, as well as a switch port threshold monitoring script for Cisco switches to identify potential switch port errors, discards or high traffic utilization.",
        "Performing critical security updates on managed servers, including GitLab, firewalls, and Confluence, to patch vulnerabilities, protect against potential threats, and ensure compliance with security best practices"
      ],
      technologies: ["AWS", "Python", "Puppet", "Ansible", "Terraform", "Git", "Icinga", "Docker", "ELK", "Grafana"]
    },
    {
      title: "Junior Engineer",
      company: "Sintrex Integration Services",
      period: "Mar 2018 - Apr 2021", 
      description: [
        "Extracted data from MySQL to generate network performance reports in Excel, including WAN link utilization, throughput, discards, errors, and packet loss. Developed interactive dashboards in Grafana, Kibana, and Microsoft Power BI to visualize NetFlow top talkers by IP and location, and to monitor syslog alerts.",
        "Pioneered the design of the company's first SD-WAN dashboard, defining data integration from the Cisco Viptela REST API using Postman, resulting in a 30% enhancement in network visibility and monitoring across 50+ client locations.",
        "Directed the company's inaugural Disaster Recovery project, crafting a comprehensive action plan that ensured 100% redundancy across all critical systems, integrating automatic failover to handle emergencies, and effectively minimizing data loss while securing business continuity.",
        "Advanced monitoring of Server and Network Infrastructure of large corporate clients via our Monitoring solutions (SNMP / Internal Monitoring Solution / Net Flow / Syslog / Rest API's.)"
      ],
      technologies: ["Linux", "Cisco", "MySQL", "ELK", "PowerBI", "Microsoft Word & Excel", "Grafana"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check if we're in the experience section
      const sectionStart = sectionTop - windowHeight / 2;
      const sectionEnd = sectionTop + sectionHeight - windowHeight / 2;

      if (scrollY >= sectionStart && scrollY <= sectionEnd) {
        // Calculate progress through the section
        const progress = (scrollY - sectionStart) / (sectionEnd - sectionStart);
        const clampedProgress = Math.max(0, Math.min(1, progress));
           
        // Determine which experience should be active based on progress
        const experienceIndex = Math.floor(clampedProgress * experiences.length);
        const boundedIndex = Math.max(0, Math.min(experiences.length - 1, experienceIndex));

        setActiveIndex(boundedIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [experiences.length]);

  return (
    <section id="experience" className="py-20 px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          Work Experience
        </h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-600"></div>
          <div 
            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500 transition-all duration-150 ease-out"
            style={{
              height: `${((activeIndex + 1) / experiences.length) * 100}%`
            }}
          ></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative flex items-start group"
                ref={el => experienceRefs.current[index] = el}
              >
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-slate-900 shadow-lg transition-all duration-300 z-10 ${
                  index <= activeIndex 
                    ? 'bg-gradient-to-br from-cyan-400 to-blue-500 shadow-cyan-400/30 scale-125' 
                    : 'bg-slate-600 shadow-slate-600/30'
                }`}></div>
                
                <div className="ml-16 w-full">
                  <div className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                    index <= activeIndex
                      ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/10'
                      : 'border-slate-700/50'
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                          index <= activeIndex ? 'text-cyan-400' : 'text-white'
                        }`}>
                          {exp.title}
                        </h3>
                        <h4 className="text-cyan-400 font-medium">{exp.company}</h4>
                      </div>
                      <div className="text-slate-400 font-mono text-sm bg-slate-700/50 px-3 py-1 rounded-full mt-2 md:mt-0">
                        {exp.period}
                      </div>
                    </div>

                    {/* Bullet point description with animation */}
                    <motion.ul 
                      className="list-disc list-inside space-y-2 text-slate-300 mb-4"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ staggerChildren: 0.1 }}
                    >
                      {exp.description.map((point, i) => (
                        <motion.li
                          key={i}
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0 }
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {point}
                        </motion.li>
                      ))}
                    </motion.ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
