
const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-white mb-8 text-center animate-fade-in">
          About Me
        </h2>
        <div className="text-center">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            I am a DevOps | SRE | Cloud Engineer with a strong observability background across multiple stacks, such as Prometheus, ELK, Datadog, Icinga2 and even custom built platforms.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            I am passionate about building and scaling infrastructure using IaC tools such as Terraform, and thoroughly documenting processes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
