
{/* const Blogs = () => {
  const blogPosts = [
    {
      title: "Building Scalable Infrastructure with Terraform",
      excerpt: "Learn how to create maintainable and scalable cloud infrastructure using Infrastructure as Code principles.",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["Terraform", "AWS", "DevOps"]
    },
    {
      title: "Docker Best Practices for Production",
      excerpt: "Essential tips and tricks for optimizing Docker containers in production environments.",
      date: "2023-12-22",
      readTime: "8 min read", 
      tags: ["Docker", "Production", "Optimization"]
    },
    {
      title: "Monitoring and Observability in Modern Apps",
      excerpt: "Comprehensive guide to implementing monitoring solutions using Prometheus and Grafana.",
      date: "2023-11-10",
      readTime: "12 min read",
      tags: ["Monitoring", "Prometheus", "Grafana"]
    }
  ];

  return (
    <section id="blogs" className="py-20 px-6 bg-slate-800/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Latest Blogs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group cursor-pointer"
            >
              <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-slate-300 mb-4 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs border border-cyan-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="text-cyan-400 font-medium text-sm group-hover:text-cyan-300 transition-colors duration-300">
                Read more →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
*/}