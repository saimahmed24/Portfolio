import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Jane Doe",
    role: "CEO at Company X",
    testimonial: "This service has completely transformed our business! Highly recommend.",
  },
  {
    name: "John Smith",
    role: "Product Manager at Company Y",
    testimonial: "A fantastic experience from start to finish. The team is professional and dedicated.",
  },
  {
    name: "Alice Johnson",
    role: "Designer at Company Z",
    testimonial: "Creativity and quality are at the forefront of what they do. I couldn't be happier!",
  },
  {
    name: "Jane Doe",
    role: "CEO at Company X",
    testimonial: "This service has completely transformed our business! Highly recommend.",
  },
  {
    name: "John Smith",
    role: "Product Manager at Company Y",
    testimonial: "A fantastic experience from start to finish. The team is professional and dedicated.",
  },
  {
    name: "Alice Johnson",
    role: "Designer at Company Z",
    testimonial: "Creativity and quality are at the forefront of what they do. I couldn't be happier!",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 ">
      <h2 className="text-2xl font-light text-gray-500 md:text-4xl mb-8">What My Clients Say</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
           <motion.div
           key={index}
           className="bg-black/80 border border-red-900 px-5 py-3  shadow-red-900  duration-300 hover:translate-y-2 hover:shadow-xl hover:shadow-red-900  rounded-lg shadow-md p-6 transition-transform transform hover:scale-105"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
         >
            <p className="text-white italic">"{item.testimonial}"</p>
            <div className="mt-4">
              <h5 className="text-lg font-semibold text-red-500">{item.name}</h5>
              <p className="text-sm text-white">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
