import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
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
    if (!sectionRef.current || !timelineRef.current) return;
    
    const ctx = gsap.context(() => {
      // Timeline progress animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(timelineRef.current, {
              height: `${progress * 100}%`,
              duration: 0.1,
              ease: "none"
            });
          }
        }
      });

      // Animate each experience item
      experienceRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(ref, 
            {
              opacity: 0,
              x: -50,
              scale: 0.9
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ref,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Dot animation
          const dot = ref.querySelector('.timeline-dot');
          if (dot) {
            gsap.fromTo(dot,
              {
                scale: 1,
                backgroundColor: "#64748b"
              },
              {
                scale: 1.25,
                backgroundColor: "#22d3ee",
                duration: 0.4,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: ref,
                  start: "top 60%",
                  end: "bottom 40%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          }

          // Animate bullet points with stagger effect
          const bulletPoints = ref.querySelectorAll('.bullet-point');
          if (bulletPoints.length > 0) {
            gsap.fromTo(bulletPoints,
              {
                opacity: 0,
                x: -20,
                scale: 0.8
              },
              {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                  trigger: ref,
                  start: "top 70%",
                  end: "bottom 30%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          }
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16 text-center">
          Work Experience
        </h2>
        <div className="relative">
          {/* Timeline line background */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-slate-600"></div>
          {/* Animated timeline line */}
          <div 
            ref={timelineRef}
            className="absolute left-6 sm:left-8 top-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"
            style={{ height: '0%' }}
          ></div>
          
          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative flex items-start group"
                ref={el => experienceRefs.current[index] = el}
              >
                {/* Timeline dot */}
                <div className="timeline-dot absolute left-4 sm:left-6 w-4 h-4 rounded-full border-4 border-slate-900 shadow-lg z-10 bg-slate-600"></div>
                
                {/* Content card */}
                <div className="ml-12 sm:ml-16 w-full">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-cyan-400 font-medium text-sm sm:text-base">{exp.company}</h4>
                      </div>
                      <div className="text-slate-400 font-mono text-xs sm:text-sm bg-slate-700/50 px-3 py-1 rounded-full mt-2 sm:mt-0 self-start">
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                    
                    {/* Bullet Points */}
                    <ul className="mb-4 space-y-2">
                      {exp.bulletPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="bullet-point flex items-start text-slate-300 text-sm sm:text-base">
                          <div className="w-2 h-2 bg-slate-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs sm:text-sm border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors duration-200"
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
