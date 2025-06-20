import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BestSecretLogo from "../public/logos/bestsecret_logo.jpg";
import PaysafeLogo from "../public/logos/paysafe_logo.png";
import SintrexLogo from "../public/logos/sintrex_logo.jpg";

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
      {/*description: "Leading infrastructure automation and deployment pipelines using modern DevOps practices.",*/}
      logo: "/logos/bestsecret_logo.jpg",
      bulletPoints: [
        "Migrated UptimeRobot URL monitoring solution from Ansible to Terraform, using GitLab CI/CD for automated deployment and Azure blob storage for state management.",
        "Developed and executed a change protocol for Proxmox 7 to 8 upgrade, ensuring system stability with zero downtime",
        "Conducted code reviews and approved production-level configuration changes, safeguarding deployment integrity and stability",
        "Optomized alerting systems to reduce On-Call alerts from 645 in February 2024 to 117 by August 2024."
      ],
      technologies: ["Azure", "Terraform", "Ansible", "Docker", "Git", "Prometheus", "ELK", "Datadog", "Grafana"]
    },
    {
      title: "Infrastructure Engineer", 
      company: "Paysafe Group",
      period: "Jun 2021 - Nov 2023",
      {/*description: "Developed web applications using React, Node.js, and cloud technologies.",*/}
      logo: "/logos/paysafe_logo.png",
      bulletPoints: [
        "Migrated all application servers to a new virtualisation cluster, using Terraform, Puppet and Git for seamless deployment.",
        "Developed custom python monitoring scripts for ZFS and Cisco switch port monitoring on newly deployed infrastructure.",
        "Contributed to a successful migration of on-premise SFTP solution to AWS.",
        "Performing critical security updates on managed servers, including GitLab, firewalls, and Confluence, to patch vulnerabilities, protect against potential threats, and ensure compliance with security best practices."
      ],
      technologies: ["AWS", "Terraform", "Ansible", "Puppet", "Docker", "Git", "Python", "ELK", "Icinga", "Grafana"]
    },
    {
      title: "Junior Engineer",
      company: "Sintrex Integration services",
      period: "Mar 2018 - Apr 2021", 
      {/*description: "Started my journey in software development, working on various client projects.",*/}
      logo: "/logos/sintrex_logo.jpg",
      bulletPoints: [
        "Extracted data from MySQL to generate network performance reports in Excel, including WAN link utilization, throughput, discards, errors, and packet loss. Developed interactive dashboards in Grafana, Kibana, and Microsoft Power BI to visualize NetFlow top talkers by IP and location, and to monitor syslog alerts.",
        "Pioneered the design of the company's first SD-WAN dashboard, defining data integration from the Cisco Viptela REST API using Postman, resulting in a 30% enhancement in network visibility and monitoring across 50+ client locations.",
        "Directed the company's inaugural Disaster Recovery project, crafting a comprehensive action plan that ensured 100% redundancy across all critical systems, integrating automatic failover to handle emergencies, and effectively minimizing data loss while securing business continuity.",
        "Analyzed and interpreted data from network monitoring tools to identify potential areas for improvement and assess risk, driving proactive enhancements and risk mitigation."
      ],
      technologies: ["Linux", "MySQL", "Cisco", "Microsoft Word & Excel", "PowerBi", "Grafana", "ELK"]
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

          // Card highlighting effect
          const card = ref.querySelector('.experience-card');
          if (card) {
            gsap.to(card, {
              borderColor: "#22d3ee",
              backgroundColor: "rgba(30, 41, 59, 0.8)",
              duration: 0.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ref,
                start: "top 60%",
                end: "bottom 40%",
                toggleActions: "play none none reverse"
              }
            });
          }

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
                <div className="timeline-dot absolute left-4 sm:left-6 w-4 h-4 rounded-full border-4 border-slate-900 shadow-lg z-10 bg-slate-600 transition-all duration-300"></div>
                
                {/* Content card */}
                <div className="ml-12 sm:ml-16 w-full">
                  <div className="experience-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover border border-slate-600"
                        />
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-1">
                            {exp.title}
                          </h3>
                          <h4 className="text-cyan-400 font-medium text-sm sm:text-base">{exp.company}</h4>
                        </div>
                      </div>
                      <div className="text-slate-400 font-mono text-xs sm:text-sm bg-slate-700/50 px-3 py-1 rounded-full mt-2 sm:mt-0 self-start">
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                    
                    {/* Bullet Points - with safety check */}
                    {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                      <ul className="mb-4 space-y-2">
                        {exp.bulletPoints.map((point, pointIndex) => (
                          <li key={pointIndex} className="bullet-point flex items-start text-slate-300 text-sm sm:text-base">
                            <div className="w-2 h-2 bg-slate-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
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
