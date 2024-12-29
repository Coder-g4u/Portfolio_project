import React from 'react';
import { Code, Palette, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-600">
            I'm a passionate developer focused on creating beautiful and functional web applications.
            With expertise in modern web technologies, I bring ideas to life through clean code and
            thoughtful design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code className="w-8 h-8 mb-4" />,
              title: 'Development',
              description: 'Building robust and scalable applications using modern technologies and best practices.'
            },
            {
              icon: <Palette className="w-8 h-8 mb-4" />,
              title: 'Design',
              description: 'Creating intuitive and visually appealing interfaces that enhance user experience.'
            },
            {
              icon: <Users className="w-8 h-8 mb-4" />,
              title: 'Collaboration',
              description: 'Working effectively in teams and communicating complex ideas clearly.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center text-gray-700">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;