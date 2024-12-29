import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Real-Time Chat Application',
    description: 'A full-stack real time chat application built with React and Node.js',
    image: 'https://miro.medium.com/v2/resize:fit:592/1*AVRAkY0D1kiVc6Ha1e5mSg.jpeg',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS','Daisy UI'],
    liveUrl: 'https://mern-chat-app-i4wd.onrender.com/',
    githubUrl: 'https://github.com/Coder-g4u/mern-chat-app'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Firebase', 'Material-UI'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'Modern and responsive portfolio website built with React',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    title="View Live"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    title="View Code"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;