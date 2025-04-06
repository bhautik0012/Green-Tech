import React from 'react';
import { FaSolarPanel, FaTools, FaChartLine, FaHandshake, FaShieldAlt, FaHeadset } from 'react-icons/fa';

function ServiceProvider() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-20 text-white bg-gradient-to-r from-blue-900 to-green-800">
        <div className="container px-6 mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Green Tech</h1>
          <p className="max-w-3xl mx-auto mb-8 text-xl md:text-2xl">
            Empowering your future with sustainable, reliable, and efficient Green Tech
          </p>
          
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container px-6 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="p-8 transition duration-300 rounded-lg shadow-md bg-gray-50 hover:shadow-xl">
                <div className="mb-4 text-4xl text-blue-600">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gray-100">
        <div className="container px-6 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">Why Choose Our Services</h2>
          <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Solar Panels" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="p-2 mr-4 bg-green-100 rounded-full">
                      <benefit.icon className="text-xl text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="container px-6 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">What Our Clients Say</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-lg bg-gray-50">
                <div className="flex items-center mb-4">
                  <div className="p-2 mr-4 bg-blue-100 rounded-full">
                    <testimonial.icon className="text-xl text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-gray-600">"{testimonial.quote}"</p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-white bg-gradient-to-r from-blue-700 to-green-700">
        <div className="container px-6 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Go Solar?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Contact us today for a free consultation and start your journey to sustainable energy.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="px-8 py-3 font-bold text-blue-800 transition duration-300 bg-white rounded-full hover:bg-gray-100">
              Request a Quote
            </button>
            <button className="px-8 py-3 font-bold transition duration-300 border-2 border-white rounded-full hover:bg-white hover:text-blue-800">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Data for services
const services = [
  {
    icon: <FaSolarPanel />,
    title: "Solar Panel Installation",
    description: "Professional installation of high-quality solar panels for residential and commercial properties."
  },
  {
    icon: <FaTools />,
    title: "Maintenance Services",
    description: "Regular maintenance and inspection to ensure optimal performance of your solar system."
  },
  {
    icon: <FaChartLine />,
    title: "Energy Efficiency Consulting",
    description: "Expert advice on how to maximize your energy savings and reduce your carbon footprint."
  },
  {
    icon: <FaHandshake />,
    title: "Government Scheme Assistance",
    description: "Guidance through government incentives and subsidy programs for solar energy adoption."
  },
  {
    icon: <FaShieldAlt />,
    title: "Warranty & Support",
    description: "Comprehensive warranty coverage and dedicated customer support for all our products."
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance for any queries or issues with your solar energy system."
  }
];

// Data for benefits
const benefits = [
  {
    icon: FaSolarPanel,
    title: "Industry-Leading Technology",
    description: "We use only the most advanced and efficient solar technology available."
  },
  {
    icon: FaChartLine,
    title: "Proven Track Record",
    description: "Thousands of satisfied customers with documented energy savings."
  },
  {
    icon: FaHandshake,
    title: "Trusted Partnerships",
    description: "Collaborations with top manufacturers and energy providers."
  },
  {
    icon: FaShieldAlt,
    title: "25-Year Performance Guarantee",
    description: "Our systems come with an industry-leading performance guarantee."
  }
];

// Data for testimonials
const testimonials = [
  {
    icon: FaSolarPanel,
    name: "Rajesh Kumar",
    role: "Homeowner, Bangalore",
    quote: "Our electricity bills have reduced by 80% since installing solar panels. Excellent service!"
  },
  {
    icon: FaTools,
    name: "Priya Sharma",
    role: "Business Owner, Mumbai",
    quote: "The maintenance team is very professional and responsive. Our system runs flawlessly."
  },
  {
    icon: FaChartLine,
    name: "Amit Patel",
    role: "Factory Manager, Gujarat",
    quote: "The energy consulting helped us optimize our entire facility's power consumption."
  }
];

export default ServiceProvider;